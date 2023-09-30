import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp } from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard/Dashboard';
import { Profile, Settings } from '@/pages/Profile';
import { Groups, GroupsCreate, GroupsEditID } from '@/pages/Groups';
import { QuizHome, QuizzesCreate, QuizzesEditID, QuizAttemptID } from '@/pages/Quizzes';
import { Onboarding, ProfessorOnboarding, StudentOnboarding } from '@/pages/Onboarding/index';

 const config = [

 {
  id: "login",
  title: "Log In",
  element: <Login />,
  path: "/login",
  isPrivate: false,
},

{
  id: "sign-up",
  title: "Sign Up",
  element: <SignUp />,
  path: "/signup",
  isPrivate: false,
},

{
  id: "onboarding",
  title: "Onboarding",
  element: <Onboarding />,
  path: "/onboarding",
  isPrivate: true,
  children: [
    {
      id: "professor-onboarding",
      title: "Onboarding del Profesor",
      element: <ProfessorOnboarding />,
      path: "/professor-onboarding",
      isPrivate: true,
    },

    {
      id: "student-onboarding",
      title: "Onboarding del Estudiante",
      element: <StudentOnboarding />,
      path: "/student-onboarding",
      isPrivate: true,
    }

  ]
},

 {
  id: "dashboard",
  title: "Panel",
  element: <Dashboard />,
  path: "/dashboard",
  isPrivate: true,
},

{
  id: "profile",
  title: "Perfil",
  element: <Profile />,
  path: "/profile",
  topbar: true,
  isPrivate: true,
  children: [
    {
      id: "profile-settings",
      title: "Configuración de Perfil",
      element: <Settings />,
      path: "/settings",
      isPrivate: true,
    },
  ],
},
{
  id: "quizzes",
  title: "Quizzes",
  element: <QuizHome />,
  path: "/quizzes",
  sidebar: true,
  isPrivate: true,
  children: [
    {
      id: "quizzes-create",
      title: "Crear Quiz",
      element: <QuizzesCreate />,
      path: "/create",
      isPrivate: true,
    },
    {
      id: "quizzes-edit",
      title: "Editar Quiz",
      element: <QuizzesEditID />,
      path: "/edit/{quizId}",
      isPrivate: true,
    },
    {
      id: "quizzes-attempt",
      title: "Resolver Quiz",
      element: <QuizAttemptID />,
      path: "/quiz-attempt/{quizId}",
      isPrivate: true,
    },
  ],
},
{
  id: "groups",
  title: "Grupos",
  element: <Groups />,
  path: "/groups",
  sidebar: true,
  isPrivate: true,
  children: [
    {
      id: "groups-create",
      title: "Crear Grupo",
      element: <GroupsCreate />,
      path: "/create",
      isPrivate: true,
    },
    {
      id: "groups-edit",
      title: "Editar Grupo",
      element: <GroupsEditID />,
      path: "/edit/{groupId}",
      isPrivate: true,
    },
  ],
},
];

export const Routing = () => {
  return (
    <Routes>
      {config.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={route.element}
        >
          {route.children && route.children.map((childRoute) => (
            <Route
              key={childRoute.id}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

/*
const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/theme-preview" element={<ThemePreview />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/groups" element={<Groups />} >
       <Route path="/create" element={<GroupsCreate />} />
      </Route>
    </Routes>
  );
};

const Routing = () => {
  return (
    <Routes>
      { {
        config.filter(route => route.sidebar).map(route => {
          return <Item title={route.title} path={route.id} element={route.element} />
        })
      } }
*/
