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
import { User, Phone, Mail, UserPlus } from 'lucide-react';

const LeadFormModal = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const urlParams = new URLSearchParams(window.location.search);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      gender: formData.get('gender') || null,
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term'),
    };

    try {
      await fetch('https://projetolm-n8n.8x0hqh.easypanel.host/webhook/payload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Erro ao enviar formulário', error);
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl border border-red-100 p-8 shadow-xl">
        <img
          src="/logo-vertical.png"
          alt="Formação Paciente Grave"
          className="mx-auto mb-4 h-20 w-auto"
        />
        <DialogHeader className="text-center">
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-red-600">
            <UserPlus className="h-6 w-6" />
            Deixe seus dados
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Entraremos em contato em breve
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
              <Input id="name" name="name" placeholder="Seu nome" className="pl-9" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
              <Input id="phone" name="phone" placeholder="(00) 00000-0000" className="pl-9" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
              <Input id="email" name="email" type="email" placeholder="voce@exemplo.com" className="pl-9" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Sexo</Label>
            <RadioGroup name="gender" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="masculino" id="gender-masculino" />
                <Label htmlFor="gender-masculino">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="feminino" id="gender-feminino" />
                <Label htmlFor="gender-feminino">Feminino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao-informar" id="gender-nao" />
                <Label htmlFor="gender-nao">Prefiro não informar</Label>
              </div>
            </RadioGroup>
          </div>
          <DialogFooter className="pt-2">
            <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;

