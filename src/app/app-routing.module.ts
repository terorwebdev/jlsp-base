import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: AppComponent,
    data: {
      seo: {
        title: 'Hasil Laut Sabah - Fresh Setiap Hari',
        metaTags: [
          { name: 'description', content: 'Menjual hasil laut segar sabah - Ikan Udang Ketam Sotong - Fresh Setiap Hari. Penghantar COD Kota Kinabalu, Putatan, Penampang & Kepayan. Whatsapp kami, kami hantar terus ke depan pintu rumah' },
          { name: 'keywords', content: 'Menjual ikan udang ketam sotong fresh segar Kota Kinabalu, Putatan, Penampang & Kepayan. Whatsapp kami, hantar terus ke depan pintu rumah.' },
          { name: 'author', content: 'Hasil Laut Segar Sabah' },
          { property: 'og:url', content: 'https://www.hasillautsabah.com/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Menjual Hasil Laut Segar Sabah' },
          { property: 'og:title', content: 'Menjual Ikan Udang Ketam Sotong - Fresh Setiap Hari' },
          { proprety: 'og:description', content: 'Tiada masa ke pasar? Kami menjual Ikan Udang Ketam Sotong segar. Whatsapp kami, penghantaran COD area Putatan, Penampang, Kepayan dan Kota Kinabalu terus ke depan pintu rumah. POS Semenanjung/Sarawak' },
          { property: 'og:image', content: 'assets/images/banner_card_hls_v.1.png' }
        ]
      }
    }
  },
  {
    path: 'promo-video',
    component: AppComponent,
    data: {
      seo: {
        title: 'Hasil Laut Sabah - Fresh Setiap Hari',
        metaTags: [
          { name: 'description', content: 'Menjual hasil laut segar sabah - Ikan Udang Ketam Sotong - Fresh Setiap Hari. Penghantar COD Kota Kinabalu, Putatan, Penampang & Kepayan. Whatsapp kami, kami hantar terus ke depan pintu rumah' },
          { name: 'keywords', content: 'Menjual ikan udang ketam sotong fresh segar Kota Kinabalu, Putatan, Penampang & Kepayan. Whatsapp kami, hantar terus ke depan pintu rumah.' },
          { name: 'author', content: 'Hasil Laut Segar Sabah' },
          { property: 'og:url', content: 'https://www.hasillautsabah.com/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Menjual Hasil Laut Segar Sabah' },
          { property: 'og:title', content: 'Menjual Ikan Udang Ketam Sotong - Fresh Setiap Hari' },
          { proprety: 'og:description', content: 'Tiada masa ke pasar? Kami menjual Ikan Udang Ketam Sotong segar. Whatsapp kami, penghantaran COD area Putatan, Penampang, Kepayan dan Kota Kinabalu terus ke depan pintu rumah. POS Semenanjung/Sarawak' },
          { property: 'og:video', content: 'https://video.fbki2-1.fna.fbcdn.net/v/t42.27313-2/157478907_198728792027664_1695651469353540496_n.mp4?_nc_cat=106&vs=3e7c9b9b674b91e0&_nc_vs=HBksFQAYJEdQdnZZZ2tRTWc0bnZyUUFBSkRicndVSEtvZ1hickZxQUFBRhUAAsgBABUAGCRHRlFiWGduUUxKWWNhQW9OQU5PM25YRDhGRWRUYnY0R0FBQUYVAgLIAQBLA4gScHJvZ3Jlc3NpdmVfcmVjaXBlATEgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AFQAlABwAACa0ya33r4t0FQIoA0MzZRgLdnRzX3ByZXZpZXccF0ApH752yLQ5GCdkYXNoX2dlbjNiYXNpY181c2VjZ29wX2hxMV9mcmFnXzJfdmlkZW8RABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCIgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zDTE2MTU4MjE2MDA4NzEMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAI0MAxvZW1fdmlkZW9faWQPMjU1MjgyMTE5NTkyMTUzEm9lbV92aWRlb19hc3NldF9pZA8yNTUyODIxMTI5MjU0ODcVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzI1NTI4MjEwOTU5MjE1NBxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzE4NjA3OTExNjI5NTM1MiUCHAAlQAA%3D&ccb=1-3&_nc_sid=a6057a&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=gEvcD683H-EAX923HgI&_nc_ht=video.fbki2-1.fna&oh=7f98a4718223ce8b139c0a818d469dbc&oe=604F9CCD&_nc_rid=87487a5998d14dd&dl=1' }
        ]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
