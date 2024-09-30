"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { request } from "@/lib/request"
import { useState } from "react";

const CustomDialog = ({session}:{session:User}) => {
    const [open, setOpen] = useState(false)
  const deleteTodo = async () => {
    await request.delete("/todo/1/", {
        headers: {
            "Authorization": `Token ${session.token}`
        }
    })
    setOpen(false)
  }
  return (
    <>
        <Button onClick={() => setOpen(true)} className="bg-red-600">Delete</Button>
        <Dialog open={open}>
            <DialogContent>
                <DialogTitle>
                    Are you sure you want to delete this item?
                </DialogTitle>
                <DialogDescription>
                    This action cannot be undone.
                </DialogDescription>
                <DialogFooter>
                    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={deleteTodo}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default CustomDialog
