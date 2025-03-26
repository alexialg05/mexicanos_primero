
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Upload, School, Building, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const needsFormSchema = z.object({
  schoolName: z.string().min(2, {
    message: 'El nombre de la escuela debe tener al menos 2 caracteres.',
  }),
  cct: z.string().min(10, {
    message: 'El CCT debe tener al menos 10 caracteres.',
  }),
  supportType: z.string({
    required_error: 'Por favor selecciona un tipo de apoyo.',
  }),
  description: z.string().min(10, {
    message: 'La descripción debe tener al menos 10 caracteres.',
  }),
  priority: z.string({
    required_error: 'Por favor selecciona una prioridad.',
  }),
});

type NeedsFormValues = z.infer<typeof needsFormSchema>;

const RegisterNeeds = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<NeedsFormValues>({
    resolver: zodResolver(needsFormSchema),
    defaultValues: {
      schoolName: '',
      cct: '',
      supportType: '',
      description: '',
      priority: '',
    },
  });

  const onSubmit = async (values: NeedsFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form values:', values);
      console.log('Evidence file:', selectedFile);
      
      toast({
        title: 'Necesidad registrada exitosamente',
        description: 'Tu solicitud ha sido enviada y será revisada por nuestro equipo.',
        variant: 'default',
      });
      
      // Reset form
      form.reset();
      setSelectedFile(null);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const supportTypes = [
    { value: 'infrastructure', label: 'Infraestructura' },
    { value: 'educational_materials', label: 'Material educativo' },
    { value: 'technology', label: 'Tecnología' },
    { value: 'training', label: 'Capacitación' },
    { value: 'mentoring', label: 'Mentoría' },
    { value: 'financial', label: 'Apoyo financiero' },
    { value: 'other', label: 'Otro' },
  ];

  const priorities = [
    { value: 'high', label: 'Alta' },
    { value: 'medium', label: 'Media' },
    { value: 'low', label: 'Baja' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <Container className="max-w-3xl mx-auto pt-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Registro de Necesidades</h1>
            <p className="text-muted-foreground">
              Comparte las necesidades de tu escuela para que nuestros aliados puedan brindarte apoyo.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center">
                <School className="h-5 w-5 mr-2 text-primary" />
                <span>Formulario de Registro de Necesidades</span>
              </CardTitle>
              <CardDescription>
                Completa todos los campos con información detallada para facilitar el match con aliados.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="schoolName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de la Escuela</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Escuela Primaria Benito Juárez" {...field} />
                        </FormControl>
                        <FormDescription>
                          Ingresa el nombre completo de tu institución educativa.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cct"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Clave de Centro de Trabajo (CCT)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. 14DPR0001A" {...field} />
                        </FormControl>
                        <FormDescription>
                          La clave oficial asignada por la SEP.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="supportType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Apoyo Requerido</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el tipo de apoyo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {supportTypes.map(type => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Selecciona la categoría que mejor describa tu necesidad.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción de la Necesidad</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe detalladamente la necesidad de tu escuela..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Proporciona detalles específicos: qué necesitas, por qué es importante, cuántos estudiantes se beneficiarían, etc.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nivel de Prioridad</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona la prioridad" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {priorities.map(priority => (
                              <SelectItem key={priority.value} value={priority.value}>
                                {priority.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Indica la urgencia o importancia de esta necesidad.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <FormLabel>Evidencias</FormLabel>
                    <div className="border border-input rounded-md p-4">
                      <label 
                        htmlFor="evidence-upload" 
                        className="flex flex-col items-center justify-center gap-2 cursor-pointer py-4"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {selectedFile ? selectedFile.name : 'Haz clic para subir evidencia'}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Soporta: JPG, PNG, PDF (máx. 10MB)
                        </span>
                      </label>
                      <input
                        id="evidence-upload"
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                      />
                    </div>
                    <FormDescription>
                      Sube fotos, documentos o cualquier evidencia que respalde tu necesidad.
                    </FormDescription>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Registrando...</>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Registrar Necesidad
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterNeeds;
