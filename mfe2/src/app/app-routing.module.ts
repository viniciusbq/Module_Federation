import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren:() => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: "http://localhost:4001/remoteEntry.js",
        exposedModule:"./OrderModule"
      }).then(m=>m.OrderModule).catch(e=>console.log(e))
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
