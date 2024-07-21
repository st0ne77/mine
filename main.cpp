#include "app.h"

#include <Windows.h>

int WinMain(HINSTANCE hInstance,
            HINSTANCE hPrevInstance,
            LPSTR lpCmdLine,
            int nShowCmd) {
    App app{};
    return app.Go();
}
