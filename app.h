#ifndef APP_H
#define APP_H

class App {
public:
    App();
    App(const App&) = delete;
    App& operator=(const App&) = delete;
    ~App();

    int Go();
};
#endif // APP_H