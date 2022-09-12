export interface IOnboarding {
    key: string;
    title: string;
    description: string;
}

export interface SlideProps {
    item: IOnboarding;
}

export const slides= [
    {
        key: '1',
        title: 'APP DE FINANÇAS',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.'
    },
    {
        key: '2',
        title: 'ADMINISTRAÇÃO DO SEU DINHEIRO',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.'
    },
    {
        key: '3',
        title: 'DESCONTOS NAS PRINCIPAIS LOJAS',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.'
    }
]