cmake_minimum_required(VERSION 3.5.0)
project(mine VERSION 0.1.0 LANGUAGES C CXX)

add_executable(mine WIN32
    main.cpp
    app.h
    app.cpp
    window.h
    window.cpp
)

target_compile_definitions(mine
    PRIVATE WIN32_LEAN_AND_MEAN
)
