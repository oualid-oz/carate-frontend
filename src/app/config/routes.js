export const PrivateRoute = Object.freeze({
    HomePage: Object.freeze({
        url: "/",
    }),
    CarPage: Object.freeze({
        url: "car",
        DashboardPage: Object.freeze({
            url: "/",
        }),
        CarsPage: Object.freeze({
            url: "cars",
        }),
        ReviewsPage: Object.freeze({
            url: "reviews",
        }),
        IncomesPage: Object.freeze({
            url: "incomes",
        }),
    }),
    ProfilePage: Object.freeze({
        url: "me",
    }),
    LogoutPage: Object.freeze({
        url: "logout",
    }),
});

export const PublicRoute = Object.freeze({
    NotFoundPage: Object.freeze({
        url: "*",
    }),
    LoginPage: Object.freeze({
        url: "login",
    }),
    SignupPage: Object.freeze({
        url: "signup",
    }),
    AboutPage: Object.freeze({
        url: "about",
    }),
});