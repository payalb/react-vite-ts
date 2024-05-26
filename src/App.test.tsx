import {render, screen} from '@testing-library/react'
import { describe, expect, it  } from 'vitest'

import {App, WrappedApp} from './App'
import { MemoryRouter } from 'react-router-dom'

describe('App', ()=> {
    it('Renders Hello World', ()=>{
        render(<WrappedApp/>)
        expect(screen.getByRole('heading', {level: 1 })).toHaveTextContent("Hello World");
        
    }),
    it('Renders Not Found if invalid path', ()=>{
        const badRoute = "/some/bad/route"
        render(<MemoryRouter initialEntries={[badRoute]}><App/></MemoryRouter>)
        expect(screen.getByRole('heading', {level: 1 })).toHaveTextContent("Page Not Found");
        
    })
})