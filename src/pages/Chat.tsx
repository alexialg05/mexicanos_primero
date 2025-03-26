
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, User, Building } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Message {
  id: number;
  content: string;
  sender: 'school' | 'ally';
  timestamp: Date;
}

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'Hola, somos aliados de Mexicanos Primero Jalisco. ¿En qué podemos ayudarles?',
      sender: 'ally',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      content: 'Hola, somos la Escuela Primaria Benito Juárez. Estamos interesados en recibir apoyo para mejorar nuestra biblioteca.',
      sender: 'school',
      timestamp: new Date(Date.now() - 1800000),
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        content: message,
        sender: 'school',
        timestamp: new Date(),
        
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate response from ally after 1 second
      setTimeout(() => {
        const allyResponse: Message = {
          id: messages.length + 2,
          content: 'Gracias por compartir esa información. ¿Podrían proporcionarnos más detalles sobre las necesidades específicas de la biblioteca?',
          sender: 'ally',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, allyResponse]);
      }, 1000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-MX', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <Container className="max-w-4xl mx-auto pt-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Comunicación Directa</h1>
          <p className="text-center text-muted-foreground mb-8">
            Coordina de manera efectiva con tus aliados o escuelas para maximizar el impacto de los apoyos.
          </p>
          
          <Card className="shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-primary" />
                <span>Chat con Aliado</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex flex-col">
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === 'school' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.sender === 'school'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="font-semibold flex items-center text-sm mb-1">
                          {msg.sender === 'school' ? (
                            <>
                              <span>Escuela</span>
                              <User className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              <span>Aliado</span>
                              <Building className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </div>
                        <p>{msg.content}</p>
                        <div className="text-xs mt-1 opacity-80 text-right">
                          {formatTime(msg.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      className="resize-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage} className="shrink-0">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
