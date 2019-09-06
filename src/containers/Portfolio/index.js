import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";       
   
const Portfolio = () => (
        <ul>
            <li>
            <Link to={ROUTES.RESUME}>Resume</Link>
          </li>
          <li>
            <Link to={ROUTES.TICTACTOE}>Tic Tac Toe</Link>
          </li>
          <li>
            <Link to={ROUTES.CALCULATOR}>Calculator</Link>
            </li>
            <li>
            <Link to={ROUTES.CHOOSETWO}>Choosetwo</Link>
            </li>
          </ul>
)

export default Portfolio;