import { HomePage } from '../pages/home';
import { AboutPage } from '../pages/about';
import { DivorcePage } from '../pages/divorce';
import { DivorceResourcesPage } from '../pages/divorce/resources';
import { DivorceMemberStoriesPage } from '../pages/divorce/memberStories';
import { DivorceQuestionnairePage } from '../pages/divorce/questionnaire';
import React from 'react';

const authRoutes = [];

const mainRoutes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: HomePage,
        name: 'Home'
    },
    {
        path: '/about',
        exact: true,
        auth: false,
        component: AboutPage,
        name: 'About'
    },
    {
        path: '/divorce',
        exact: true,
        auth: false,
        component: DivorcePage,
        name: 'Divorce'
    },
    {
        path: '/divorce/resources',
        exact: true,
        auth: false,
        component: DivorceResourcesPage,
        name: 'DivorceResources'
    },
    {
        path: '/divorce/member-stories',
        exact: true,
        auth: false,
        component: DivorceMemberStoriesPage,
        name: 'DivorceMemberStories'
    },
    {
        path: '/divorce/questionnaire',
        exact: true,
        auth: false,
        component: DivorceQuestionnairePage,
        name: 'DivorceQuestionnaire'
    }
];

const routes = [
    ...authRoutes,
    ...mainRoutes
];

export default routes;