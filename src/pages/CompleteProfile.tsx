
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Schema for escuela profile
const escuelaSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  cct: z.string().min(5, 'El CCT debe tener al menos 5 caracteres'),
  address: z.string().min(5, 'La dirección es requerida'),
  educationLevel: z.string().min(1, 'El nivel educativo es requerido'),
  phoneNumber: z.string().optional(),
  description: z.string().optional(),
});

// Schema for aliado profile
const aliadoSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  sector: z.string().min(1, 'El sector es requerido'),
  supportTypes: z.array(z.string()).min(1, 'Selecciona al menos un tipo de apoyo'),
  description: z.string().min(10, 'La descripción es requerida'),
  contactName: z.string().min(2, 'El nombre de contacto es requerido'),
  contactEmail: z.string().email('Ingresa un correo electrónico válido'),
  contactPhone: z.string().optional(),
  address: z.string().min(5, 'La dirección es requerida'),
});

type EscuelaFormValues = z.infer<typeof escuelaSchema>;
type AliadoFormValues = z.infer<typeof aliadoSchema>;

const CompleteProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEscuela = user?.role === 'escuela';

  // Escuela form
  const escuelaForm = useForm<EscuelaFormValues>({
    resolver: zodResolver(escuelaSchema),
    defaultValues: {
      name: user?.name || '',
      cct: '',
      address: '',
      educationLevel: '',
      phoneNumber: '',
      description: '',
    },
  });

  // Aliado form
  const aliadoForm = useForm<AliadoFormValues>({
    resolver: zodResolver(aliadoSchema),
    defaultValues: {
      name: user?.name || '',
      sector: '',
      supportTypes: [],
      description: '',
      contactName: '',
      contactEmail: user?.email || '',
      contactPhone: '',
      address: '',
    },
  });

  const supportTypes = [
    { id: 'infraestructura', label: 'Infraestructura' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'capacitacion', label: 'Capacitación docente' },
    { id: 'materiales', label: 'Materiales educativos' },
    { id: 'mobiliario', label: 'Mobiliario' },
    { id: 'alimentacion', label: 'Alimentación' },
    { id: 'salud', label: 'Salud' },
    { id: 'otros', label: 'Otros' },
  ];

  const educationLevels = [
    { value: 'preescolar', label: 'Preescolar' },
    { value: 'primaria', label: 'Primaria' },
    { value: 'secundaria', label: 'Secundaria' },
    { value: 'media_superior', label: 'Media Superior' },
    { value: 'superior', label: 'Superior' },
  ];

  const sectors = [
    { value: 'empresa_privada', label: 'Empresa Privada' },
    { value: 'fundacion', label: 'Fundación' },
    { value: 'asociacion_civil', label: 'Asociación Civil' },
    { value: 'gobierno', label: 'Gobierno' },
    { value: 'academia', label: 'Academia/Universidad' },
    { value: 'otro', label: 'Otro' },
  ];

  const onEscuelaSubmit = async (data: EscuelaFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, here we would save the profile data to the database
      console.log('Escuela profile data:', data);
      
      // Update the user profile in local storage to mark as complete
      if (user) {
        const updatedUser = { ...user, profileComplete: true };
        localStorage.setItem('educare_user', JSON.stringify(updatedUser));
      }
      
      toast({
        title: 'Perfil completado',
        description: 'Tu perfil ha sido actualizado correctamente.',
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error al guardar",
        description: "Ocurrió un error al guardar tu perfil.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onAliadoSubmit = async (data: AliadoFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, here we would save the profile data to the database
      console.log('Aliado profile data:', data);
      
      // Update the user profile in local storage to mark as complete
      if (user) {
        const updatedUser = { ...user, profileComplete: true };
        localStorage.setItem('educare_user', JSON.stringify(updatedUser));
      }
      
      toast({
        title: 'Perfil completado',
        description: 'Tu perfil ha sido actualizado correctamente.',
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error al guardar",
        description: "Ocurrió un error al guardar tu perfil.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 pb-12">
      <Container className="max-w-4xl">
        <div className="space-y-6 bg-card p-8 rounded-lg shadow-sm border animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-center">Completa tu perfil</h1>
            <p className="text-muted-foreground text-center">
              Necesitamos algunos datos adicionales para optimizar tu experiencia
            </p>
          </div>

          {isEscuela ? (
            <Form {...escuelaForm}>
              <form onSubmit={escuelaForm.handleSubmit(onEscuelaSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={escuelaForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de la Escuela</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre completo de la escuela" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={escuelaForm.control}
                    name="cct"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CCT</FormLabel>
                        <FormControl>
                          <Input placeholder="Clave de Centro de Trabajo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={escuelaForm.control}
                    name="educationLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nivel Educativo</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el nivel educativo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {educationLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={escuelaForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Teléfono de contacto" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={escuelaForm.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder="Dirección completa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={escuelaForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción breve</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe brevemente tu escuela, número de alumnos, etc."
                          {...field}
                          className="min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    'Guardar Perfil'
                  )}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...aliadoForm}>
              <form onSubmit={aliadoForm.handleSubmit(onAliadoSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={aliadoForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de la Organización</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de la organización" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={aliadoForm.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sector</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el sector" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {sectors.map((sector) => (
                              <SelectItem key={sector.value} value={sector.value}>
                                {sector.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={aliadoForm.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de Contacto</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de la persona de contacto" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={aliadoForm.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo de Contacto</FormLabel>
                        <FormControl>
                          <Input placeholder="Correo electrónico" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={aliadoForm.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder="Dirección completa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={aliadoForm.control}
                  name="supportTypes"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Tipos de Apoyo</FormLabel>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {supportTypes.map((type) => (
                          <FormField
                            key={type.id}
                            control={aliadoForm.control}
                            name="supportTypes"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={type.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(type.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, type.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== type.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {type.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={aliadoForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe brevemente tu organización y cómo pueden apoyar"
                          {...field}
                          className="min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    'Guardar Perfil'
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CompleteProfile;
