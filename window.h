#ifndef WINDOW_H
#define WINDOW_H

class Window {
public:
    Window();
    Window(const Window&) = delete;
    Window& operator=(const Window&) = delete;
    ~Window();

    bool Create();
};

#endif // WINDOW_H