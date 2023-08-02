<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
            <li>
                <button  v-if="!existeUsuario" type="button" class="btn btn-outline-primary mx-2" 
                  data-bs-toggle="modal" 
                  data-bs-target="#login">
                  Log in
                </button> 
            </li>
            <li>
                <button  v-if="!existeUsuario" class="btn btn-outline-danger me-2"
                  data-bs-toggle="modal" 
                  data-bs-target="#login"
                  @click="signout">
                  Log out
                </button>
            </li>
            <li>
                <button  v-if="!existeUsuario" type="button" 
                  class="btn btn-outline-warning" 
                  data-bs-toggle="modal" 
                  data-bs-target="#registro"><!-- inicia modal con id="registro" --> 
                  Regístrate
                </button> 

            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- //// Modal - Registrarse //// -->
    <div class="modal fade" id="registro">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Regístrate</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="register(this.email, this.password)">  
               <!-- CORREO -->
              <div class="input-group mb-3">
              <span class="input-group-text">Correo</span>
              <input v-model="email" 
                      type="email"
                      required="true"
                      class="form-control">
              </div>
              <!-- PASSWORD -->
              <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <input v-model="password" 
                      type="password"
                      required="true" 
                      class="form-control">
              </div>
              <!-- REPASSWORD -->
              <div class="input-group mb-3">
              <span class="input-group-text">Repite Password</span>
              <input v-model="repassword" 
                      type="password"
                      required="true" 
                      class="form-control">
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   <!-- //// Modal - Iniciar sesión //// -->
    <div class="modal fade" id="login">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Inicia de sesión</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="login(this.email, this.password)">
              <!-- CORREO --> 
              <div class="input-group mb-3">
              <span class="input-group-text">Correo</span>
              <input v-model="email" 
                      type="email"
                      required="true"
                      class="form-control"
                      placeholder="curso@charcha.com"
                      >
              </div>
              <!-- PASSWORD --> 
              <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <input v-model="password" 
                      type="password"
                      required="true" 
                      class="form-control"
                      placeholder="123456"
                      >
              </div>
              <div class="d-grid gap-2">
                <button type="submit" 
                  class="btn btn-primary" 
                  data-bs-dismiss="modal"><!-- Cierra el modal --> 
                  Iniciar sesión
                </button>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>


</template>






<script>
import { 
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
   data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: ''
        };
    },
   methods: {
     register(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('¡Registrado!');
        })
        .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            // ..
        });
      },        
     login( email, password ) {
       const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('¡Sesión iniciada!');
            // Signed in
            const user = userCredential.user;
            // ...
            })
        .catch((error) => {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        });
        },
     signout () {
       const auth = getAuth();
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
      });
     }
   },
    computed: {
        ...mapGetters(['existeUsuario'])
    }
}
</script>