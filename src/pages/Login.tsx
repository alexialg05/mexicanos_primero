
import { Link } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import { Container } from '@/components/ui/Container';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <Container className="grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <div className="space-y-4 max-w-lg animate-fade-in">
              <h1 className="text-4xl font-bold text-foreground">¡Bienvenido de nuevo!</h1>
              <p className="text-muted-foreground text-lg">
                Inicia sesión para acceder a la plataforma Educare y continuar
                apoyando la educación en Jalisco.
              </p>
              <div className="glass-card p-6 rounded-lg space-y-4">
                <h3 className="font-medium">Características principales:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                    <span>Gestión integral de necesidades educativas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                    <span>Conexión directa entre escuelas y aliados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                    <span>Seguimiento transparente de los apoyos brindados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-card p-8 rounded-lg shadow-sm border animate-scale-in">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
              <p className="text-muted-foreground">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>

            <AuthForm type="login" />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                ¿No tienes una cuenta?{' '}
                <Link to="/register" className="text-primary hover:underline font-medium">
                  Regístrate aquí
                </Link>
              </p>
              <p className="text-xs text-muted-foreground">
                Al iniciar sesión, aceptas nuestros{' '}
                <Link to="/terminos" className="hover:underline">
                  Términos y Condiciones
                </Link>{' '}
                y{' '}
                <Link to="/privacidad" className="hover:underline">
                  Política de Privacidad
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
