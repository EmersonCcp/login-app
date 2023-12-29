import { Observable } from 'rxjs';

export interface CrudService<T> {
  // Crear un nuevo elemento
  create(item: T): Observable<T>;

  // Obtener todos los elementos
  getAll(): Observable<T[]>;

  // Obtener un elemento por ID
  getById(id: string): Observable<T>;

  // Actualizar un elemento existente
  update(id: string, item: T): Observable<T>;

  // Eliminar un elemento por ID
  delete(id: string): Observable<void>;
}
