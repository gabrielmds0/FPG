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
import { User, Phone, Mail, UserPlus } from 'lucide-react';

const LeadFormModal = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      window.location.href = 'https://uol.com.br';
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl border border-red-100 p-8 shadow-xl">
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
              <Input id="name" placeholder="Seu nome" className="pl-9" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
              <Input id="phone" placeholder="(00) 00000-0000" className="pl-9" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
              <Input id="email" type="email" placeholder="voce@exemplo.com" className="pl-9" required />
            </div>
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

