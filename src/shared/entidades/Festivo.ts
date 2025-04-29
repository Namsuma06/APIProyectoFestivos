export interface Festivos{
  id: number;
  nombre: string;
  dia: number;
  mes: number;
  diasPascua: number;
  idTipo: number;
  tipo: {
    id: number;
    nombre: string;
    };  
  }