import { Router } from 'express'

interface IRouter {
    build(): Router
}

export { IRouter }