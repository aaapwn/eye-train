"use client";

import { useState, useEffect } from "react";
import { request } from "@/lib/request";

type Todo = {
    title: string;
    description: string;
}

const ShowTodos = ({session}:{session:User}) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    request.get("/todos/", {
        headers: {
            "Authorization": `Token ${session.token}`
        }
    }).then((res) => {
        setTodos(res.data)
    })
  }, [])

  return (
    <div>
        {
            todos.map((todo, index) => (
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ShowTodos
