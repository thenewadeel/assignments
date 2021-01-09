import tkinter as tkint
from tkinter.filedialog import askopenfilename, asksaveasfilename
from Cursor_based_list import *
def new_file():
    """Create a new file for editing."""
    textField.delete(1.0, tkint.END)
    textBuffer = CursorBasedList()
    textField.insert(tkint.END, str(textBuffer))

def open_file():
    """Open a file for editing."""
    fileName = askopenfilename(
        filetypes=[("Basic Text", "*.txt"), ("All Files", "*.*")]
    )
    if not fileName:
        return
    textField.delete(1.0, tkint.END)
    with open(fileName, "r") as input_file:
        textBuffer = CursorBasedList()
        for line in input_file:
            textBuffer.insertAfter(line)
        textField.insert(tkint.END, str(textBuffer))
    window.title(f"Text Editor Application - {fileName}")

def save_file():
    """Save the current file as a new file."""
    fileName = asksaveasfilename(
        defaultextension=".txt",
        filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")],
    )
    if not fileName:
        return
    with open(fileName, "w") as output_file:
        text = textField.get(1.0, tkint.END)
        output_file.write(text)
    window.title(f"Text Editor Application - {fileName}")

window = tkint.Tk()
greeting = tkint.Label(text="Notepad 2021")
greeting.pack()
window.title("Notepad 2021")

frameApp = tkint.Frame(window, relief=tkint.RAISED, bd=2)
frameControls = tkint.Frame(frameApp, relief=tkint.RAISED, bd=2)

textField = tkint.Text(frameApp)

button_new = tkint.Button(frameControls, text="New", command=new_file)
button_open = tkint.Button(frameControls, text="Open", command=open_file)
button_save = tkint.Button(frameControls, text="Save As...", command=save_file)

button_new.pack(fill='x',side='left')
button_open.pack(fill='x',side='left')
button_save.pack(fill='x',side='left')
frameApp.pack(fill='both')
frameControls.pack(fill='both')
textField.pack(fill='both')

window.mainloop()
