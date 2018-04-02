import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

export interface Mensaje { id: string; nombre: string; correo: string; telefono: string; mensaje: string; }

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  mensajes: Observable<Mensaje[]>;
  isAdmin: boolean = false;
  modalRef: BsModalRef;
  mensajeSeleccionado: Mensaje;

  private mensajesCollection: AngularFirestoreCollection<Mensaje>;

  constructor(private readonly afs: AngularFirestore, private toastr: ToastrService, private modalService: BsModalService) {
    this.mensajesCollection = afs.collection('messages');
    this.mensajes = this.mensajesCollection.valueChanges();
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  escogerMensaje(mensaje) {
    this.mensajeSeleccionado = mensaje;
  }

  agregarMensaje(nombre, correo, telefono, mensaje) {
    const id = this.afs.createId();
    const msg: Mensaje = { id: id, nombre: nombre.value, correo: correo.value, telefono: telefono.value, mensaje: mensaje.value };
    this.mensajesCollection.doc(id).set(msg);
    this.toastr.success('El mensaje fue enviado', 'Listo :)');
    this.limpiarFormulario(nombre, correo, telefono, mensaje)
  }
  
  borrarMensaje(mensajeId) {
    this.mensajesCollection.doc(mensajeId).delete();
    this.toastr.success('Mensaje borrado', 'Listo :)');    
  }

  limpiarFormulario(nombre, correo, telefono, mensaje) {
    nombre.value = '';
    correo.value = '';
    telefono.value = '';
    mensaje.value = '';
  }

  onKey(event: any) {
    if (event.target.value == 'admin')
      this.isAdmin = true;
    else this.isAdmin = false;
  }

}
