import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Control Asistencia a Capacitaciones Agroindustrial Molino Sonra AP S.A.S
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="capacitador">Capacitador:</Label>
          <Select>
            <SelectTrigger id="capacitador">
              <SelectValue placeholder="Seleccione un capacitador" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jesus">Jesus Alberto Molina Leal</SelectItem>
              <SelectItem value="kelly">Kelly Johana Gomez Lozano</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cargo">Cargo:</Label>
          <Select>
            <SelectTrigger id="cargo">
              <SelectValue placeholder="Seleccione un cargo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gerente">Gerente</SelectItem>
              <SelectItem value="supervisor">Supervisor</SelectItem>
              <SelectItem value="operario">Operario</SelectItem>
              <SelectItem value="administrativo">Administrativo</SelectItem>
              {/* Agrega más cargos según sea necesario */}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="hora-inicio">Hora inicio:</Label>
          <Input type="time" id="hora-inicio" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hora-fin">Hora fin:</Label>
          <Input type="time" id="hora-fin" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lugar">Lugar:</Label>
          <Select>
            <SelectTrigger id="lugar">
              <SelectValue placeholder="Seleccione un lugar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="virtual">Virtual</SelectItem>
              <SelectItem value="presencial">Presencial</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Enviar</Button>
      </CardFooter>
    </Card>
  )
}