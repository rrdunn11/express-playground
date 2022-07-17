from fastapi import FastAPI

from .routers import posts
from .kafka import main

app = FastAPI()


app.include_router(posts.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.on_event("startup")
async def startup_event():
    main.main()
