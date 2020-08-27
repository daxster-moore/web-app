import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'notepad', loadChildren: () => import('./notepad/notepad.module').then(m => m.NotepadModule) },
  { path: 'password-manager', loadChildren: () => import('./password-manager/password-manager.module').then(m => m.PasswordManagerModule) },
  { path: 'password-manager/generator', loadChildren: () => import('./password-manager/pmgenerator/pmgenerator.module').then(m => m.PMGeneratorModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
