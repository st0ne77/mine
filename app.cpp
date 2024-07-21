#include "app.h"

#include <Windows.h>

App::App() {}

App::~App() {}

int App::Go() {
    MSG msg;
    while (GetMessage(&msg, nullptr, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return 0;
}