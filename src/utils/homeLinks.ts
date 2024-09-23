interface appLink {
  name: string;
  path: string;
}

export const homeLinks: appLink[] = [
  { name: 'Início', path: '/home' },
  { name: 'Conheça o PAI', path: '/conheca-o-pai' },
  { name: 'Planos', path: '/planos' },
  { name: 'Funcionalidades', path: '/funcionalidades' },
]