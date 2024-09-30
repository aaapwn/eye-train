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


const ConfirmDialog = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogTitle>
                Are you sure you want to delete this item?
            </DialogTitle>
            <DialogDescription>
                This action cannot be undone.
            </DialogDescription>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button>Delete</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ConfirmDialog
