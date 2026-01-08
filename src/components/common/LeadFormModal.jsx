import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Phone, Mail, UserPlus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useGoogleSheetsFPPG } from '@/hooks/useGoogleSheetsFPPG';

// Link de fallback caso a planilha não tenha o link configurado
const FALLBACK_CHECKOUT_URL = 'https://clkdmg.site/pay/formacao-paciente-grave';

const LeadFormModal = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: ''
  });
  const [errors, setErrors] = useState({});

  // Busca dados da planilha (incluindo o link de checkout)
  const { data: sheetData } = useGoogleSheetsFPPG();
  
  // Obtém o link de checkout da planilha ou usa o fallback
  const checkoutUrl = sheetData?.Checkout || FALLBACK_CHECKOUT_URL;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Limpa erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    console.log('Botão clicado - iniciando envio');
    
    if (!validateForm()) {
      toast.error('Por favor, preencha todos os campos obrigatórios corretamente');
      return;
    }

    setIsLoading(true);
    
    try {
      // Captura UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        gender: formData.gender || null,
        utm_source: urlParams.get('utm_source') || null,
        utm_medium: urlParams.get('utm_medium') || null,
        utm_campaign: urlParams.get('utm_campaign') || null,
        utm_content: urlParams.get('utm_content') || null,
        utm_term: urlParams.get('utm_term') || null,
        timestamp: new Date().toISOString()
      };

      console.log('Payload a ser enviado:', payload);

      const response = await fetch('https://projetolm-n8n.8x0hqh.easypanel.host/webhook/93a7787e-38b8-4cee-91a3-0fb66b1d0d4b', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Resposta do servidor:', response.status);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      toast.success('Formulário enviado com sucesso! Entraremos em contato em breve.');

      // Redireciona para o link de checkout da planilha após 2 segundos
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 2000);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        gender: ''
      });
      setErrors({});
      
      // Fecha o modal após sucesso
      setTimeout(() => {
        setOpen(false);
      }, 1500);
      
    } catch (error) {
      console.error('Erro detalhado ao enviar formulário:', error);
      toast.error(`Erro ao enviar: ${error.message}. Por favor, tente novamente.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-red-600 hover:bg-red-700 text-white">Quero me inscrever</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl border border-red-100 p-6 sm:p-8 shadow-xl">
        <div className="space-y-4">
          <img
            src="/logo-vertical.png"
            alt="Formação Paciente Grave"
            className="mx-auto mb-4 h-20 w-auto"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          
          <DialogHeader className="text-center">
            <DialogTitle className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-bold text-red-600">
              <UserPlus className="h-6 w-6" />
              Deixe seus dados
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Entraremos em contato em breve
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
                <Input 
                  id="name" 
                  placeholder="Seu nome completo" 
                  className={`pl-9 ${errors.name ? 'border-red-500' : ''}`}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
              </div>
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
                <Input 
                  id="phone" 
                  placeholder="(00) 00000-0000" 
                  className={`pl-9 ${errors.phone ? 'border-red-500' : ''}`}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
              </div>
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className={`pl-9 ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
              </div>
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <Label>Sexo (opcional)</Label>
              <RadioGroup 
                value={formData.gender}
                onValueChange={(value) => handleInputChange('gender', value)}
                className="flex flex-col gap-2 sm:flex-row sm:gap-4"
                disabled={isLoading}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masculino" id="gender-masculino" />
                  <Label htmlFor="gender-masculino" className="cursor-pointer font-normal">
                    Masculino
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feminino" id="gender-feminino" />
                  <Label htmlFor="gender-feminino" className="cursor-pointer font-normal">
                    Feminino
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao-informar" id="gender-nao" />
                  <Label htmlFor="gender-nao" className="cursor-pointer font-normal">
                    Prefiro não informar
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button 
              type="button"
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Formulário'
              )}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
