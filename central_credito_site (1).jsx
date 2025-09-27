import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function CentralDoCredito() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-8">
      {/* Logo */}
      <motion.img
        src="/logo-central.png"
        alt="Central do Crédito Logo"
        className="h-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      />

      {/* Horário e Localização */}
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl w-full">
        <Card className="shadow-xl">
          <CardContent className="flex items-center space-x-3 p-4">
            <Clock className="text-green-600" />
            <p className="text-lg">Seg a Sex: 13:40 às 18:00</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="flex items-center space-x-3 p-4">
            <MapPin className="text-green-600" />
            <p className="text-lg">Rua Antunes Ribas, 1538 - Sala 7, Santo Ângelo - RS</p>
          </CardContent>
        </Card>
      </div>

      {/* Produtos */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card className="shadow-xl">
          <CardContent className="space-y-2 p-4">
            <h2 className="text-2xl font-bold text-green-700">Empréstimo Consignado CLT</h2>
            <p>Crédito com desconto em folha para trabalhadores CLT, com as melhores taxas do mercado.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="space-y-2 p-4">
            <h2 className="text-2xl font-bold text-green-700">Empréstimo na Conta de Luz</h2>
            <p>Pague seu empréstimo diretamente na fatura de energia, sem complicação.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="space-y-2 p-4">
            <h2 className="text-2xl font-bold text-green-700">Empréstimo no Boleto</h2>
            <p>Receba seu crédito e pague em boletos mensais, ideal para quem busca praticidade.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="space-y-2 p-4">
            <h2 className="text-2xl font-bold text-green-700">Empréstimo INSS</h2>
            <p>Opção especial para aposentados e pensionistas, com taxas reduzidas e fácil aprovação.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl md:col-span-2">
          <CardContent className="space-y-2 p-4">
            <h2 className="text-2xl font-bold text-green-700">Saque FGTS</h2>
            <p>Antecipe seu FGTS e tenha dinheiro disponível em poucas horas para realizar seus planos.</p>
          </CardContent>
        </Card>
      </div>

      {/* Google Maps */}
      <div className="max-w-4xl w-full mt-6 shadow-xl rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.540152271448!2d-54.2613505!3d-28.3006367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb3e4a6f07c1d7%3A0x123456789abcdef!2sRua%20Antunes%20Ribas%2C%201538%20-%20Santo%20Ângelo%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1695760000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Formulário de Contato */}
      <div className="max-w-2xl w-full mt-6 bg-white shadow-xl rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Fale Conosco</h2>
        <form className="space-y-4">
          <Input placeholder="Seu nome" required />
          <Input placeholder="Seu telefone" required />
          <Textarea placeholder="Sua mensagem" rows={4} required />
          <Button className="bg-green-600 hover:bg-green-700 text-white w-full flex items-center justify-center space-x-2">
            <Send /> <span>Enviar Mensagem</span>
          </Button>
        </form>
      </div>

      {/* Botão WhatsApp */}
      <motion.a
        href="https://wa.me/555599421121?text=Olá!%20Vamos%20fazer%20uma%20simulação%20agora?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full p-6 text-lg flex items-center space-x-2">
          <Phone />
          <span>Vamos fazer uma simulação agora?</span>
        </Button>
      </motion.a>
    </div>
  );
}
