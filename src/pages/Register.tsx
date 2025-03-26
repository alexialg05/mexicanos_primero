
import { Link } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import { Container } from '@/components/ui/Container';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <Container className="grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <div className="space-y-4 max-w-lg animate-fade-in">
              <h1 className="text-4xl font-bold text-foreground">¡Únete a Educare!</h1>
              <p className="text-muted-foreground text-lg">
                Regístrate para ser parte de la red de apoyo educativo más grande de Jalisco y contribuir al mejoramiento de las escuelas.
              </p>
              <div className="glass-card p-6 rounded-lg space-y-4">
                <h3 className="font-medium">¿Cómo funciona?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                    <span>Regístrate como escuela o aliado según tu perfil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                    <span>Completa tu perfil con la información requerida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                    <span>Comienza a registrar necesidades o brindar apoyos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-card p-8 rounded-lg shadow-sm border animate-scale-in">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold">Crear una cuenta</h2>
              <p className="text-muted-foreground">
                Completa el formulario para crear tu cuenta
              </p>
            </div>

            <AuthForm type="register" />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Inicia sesión aquí
                </Link>
              </p>
              <p className="text-xs text-muted-foreground">
                Al registrarte, aceptas nuestros{' '}
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

export default Register;
