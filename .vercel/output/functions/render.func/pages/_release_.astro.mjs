export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.c6a359d0.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../chunks/pages/_release_.astro.77d48754.mjs').then(n => n._);

export { page };
