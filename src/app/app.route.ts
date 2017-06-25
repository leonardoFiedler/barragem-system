import {Routes} from '@angular/router'
import {LoginComponent} from './login/login.component'
import {IndexComponent} from './index/index.component'
import {ProgramacaoBarragemComponent} from './programacao-barragem/programacao-barragem.component'
import {InscricaoComponent} from './inscricao/inscricao.component'

export const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'programacao-barragem',
        component: ProgramacaoBarragemComponent
    },
    {
        path: 'inscricao',
        component: InscricaoComponent
    },
    {
        path: '**',
        component: IndexComponent
    }
]