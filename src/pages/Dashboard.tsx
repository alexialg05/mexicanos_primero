
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { 
  ChevronRight, 
  LogOut, 
  School, 
  Handshake, 
  User, 
  PlusCircle, 
  BarChart3, 
  ListChecks, 
  MessageSquare,
  InfoIcon,
  CalendarIcon,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Animate cards on mount
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-fade-in');
        card.classList.remove('opacity-0');
      }, 100 * index);
    });
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const renderAdminDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <School className="w-5 h-5 mr-2 text-primary" />
            Escuelas
          </CardTitle>
          <CardDescription>Gestión de escuelas registradas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Total de escuelas</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Escuelas activas</span>
              <span className="font-medium">18</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver todas
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <Handshake className="w-5 h-5 mr-2 text-primary" />
            Aliados
          </CardTitle>
          <CardDescription>Gestión de aliados registrados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Total de aliados</span>
              <span className="font-medium">15</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Aliados activos</span>
              <span className="font-medium">12</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver todos
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <ListChecks className="w-5 h-5 mr-2 text-primary" />
            Necesidades
          </CardTitle>
          <CardDescription>Necesidades registradas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Pendientes</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>En proceso</span>
              <span className="font-medium">7</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Atendidas</span>
              <span className="font-medium">12</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver todas
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-primary" />
            Estadísticas
          </CardTitle>
          <CardDescription>Resumen de actividad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Usuarios totales</span>
              <span className="font-medium">39</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Apoyos brindados</span>
              <span className="font-medium">27</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver reportes
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-primary" />
            Mensajes
          </CardTitle>
          <CardDescription>Comunicaciones recientes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>No leídos</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Total</span>
              <span className="font-medium">15</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver mensajes
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <Settings className="w-5 h-5 mr-2 text-primary" />
            Configuración
          </CardTitle>
          <CardDescription>Ajustes del sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full group">
              Usuarios y permisos
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full group">
              Configuración general
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEscuelaDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="dashboard-card opacity-0 hover-scale md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle>Bienvenido a tu panel de escuela</CardTitle>
          <CardDescription>
            Aquí puedes registrar y dar seguimiento a las necesidades de tu escuela
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Completa tu perfil y comienza a registrar las necesidades de tu escuela para
            que los aliados puedan ofrecerte apoyo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="group">
              <PlusCircle className="w-4 h-4 mr-2" />
              Registrar necesidad
            </Button>
            <Button variant="outline" className="group">
              Ver mi perfil
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <ListChecks className="w-5 h-5 mr-2 text-primary" />
            Mis Necesidades
          </CardTitle>
          <CardDescription>Necesidades registradas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Pendientes</span>
              <span className="font-medium">2</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>En proceso</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Atendidas</span>
              <span className="font-medium">3</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver todas
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <Handshake className="w-5 h-5 mr-2 text-primary" />
            Aliados
          </CardTitle>
          <CardDescription>Organizaciones que te apoyan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Aliados conectados</span>
              <span className="font-medium">2</span>
            </div>
            <Button variant="outline" className="w-full group">
              Ver aliados
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-primary" />
            Mensajes
          </CardTitle>
          <CardDescription>Comunicaciones con aliados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>No leídos</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Total</span>
              <span className="font-medium">5</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver mensajes
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAliadoDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="dashboard-card opacity-0 hover-scale md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle>Bienvenido a tu panel de aliado</CardTitle>
          <CardDescription>
            Aquí puedes encontrar escuelas que necesitan tu apoyo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Explora el mapa de escuelas, busca necesidades que coincidan con tu perfil
            y brinda el apoyo que puedas ofrecer.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="group">
              Explorar necesidades
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="group">
              Ver mi perfil
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <School className="w-5 h-5 mr-2 text-primary" />
            Escuelas
          </CardTitle>
          <CardDescription>Escuelas que puedes apoyar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Escuelas compatibles</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Escuelas conectadas</span>
              <span className="font-medium">3</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver mapa
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <ListChecks className="w-5 h-5 mr-2 text-primary" />
            Apoyos
          </CardTitle>
          <CardDescription>Mis contribuciones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>En planeación</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>En proceso</span>
              <span className="font-medium">2</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Concluidos</span>
              <span className="font-medium">5</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver todos
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card opacity-0 hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-primary" />
            Mensajes
          </CardTitle>
          <CardDescription>Comunicaciones con escuelas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>No leídos</span>
              <span className="font-medium">2</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Total</span>
              <span className="font-medium">8</span>
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              Ver mensajes
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUserInfo = () => (
    <div className="mb-8 p-6 bg-card rounded-lg shadow-sm border">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={null} alt={user?.name} />
            <AvatarFallback className="text-lg bg-primary/10 text-primary">
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-muted-foreground">{user?.email}</p>
            <div className="flex items-center mt-1">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                {user?.role === 'admin' ? 'Administrador' : user?.role === 'escuela' ? 'Escuela' : 'Aliado'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="group" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>
      </div>
    </div>
  );

  const getDashboardByRole = () => {
    switch (user?.role) {
      case 'admin':
        return renderAdminDashboard();
      case 'escuela':
        return renderEscuelaDashboard();
      case 'aliado':
        return renderAliadoDashboard();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Container>
        {renderUserInfo()}
        {getDashboardByRole()}
      </Container>
    </div>
  );
};

export default Dashboard;
