import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog-components/blog/blog.component';
import { BlogsComponent } from './components/blog-components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogComponent },
  { path: 'photo-album', component: PhotoAlbumComponent, canActivate: [AuthGuard] }
  {path: 'dashboard', component: dash}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
