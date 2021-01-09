"""
File: cursor_based_list.py
Description:  Cursor-based list utilizing a header node and a trailer node.
Author: Capt Jaseem Ali
"""

from node2way import Node2Way

class CursorBasedList(object):
    """ Linked implementation of a positional list."""

    def __init__(self):
        """ Creates an empty cursor-based list."""
        self._header = Node2Way(None)
        self._trailer = Node2Way(None)
        self._trailer.setPrevious(self._header)
        self._header.setNext(self._trailer)
        self._current = None
        self._size = 0

    def hasNext(self):
        """ Returns True if the current item has a next item.
            Precondition:  the list is not empty."""
        if self.isEmpty():
            raise AttributeError("Empty list has no next item")
        return self._current.getNext() != self._trailer

    def hasPrevious(self):
        """ Returns True if the current item has a previous item.
            Precondition:  the list is not empty."""
        if self.isEmpty() is False:
            if self._current is not None:
                if self._current.getPrevious() is not None:
                    return True
        else:
            return False
        #pass

    def first(self):
        """Moves the cursor to the first item
        if there is one.
        Precondition:  the list is not empty."""
        if self.isEmpty() is False:
            self._current = self._header
        #pass

    def last(self):
        """Moves the cursor to the last item
        if there is one.
        Precondition:  the list is not empty."""
        if self.isEmpty() is False:
            self._current = self._trailer.getPrevious()
        #pass

    def next(self):
        """Precondition: hasNext returns True.
        Postcondition: The current item is has moved to the right one item"""
        if self._current.getNext() is True:
            self._current = self._current.getNext()
        #pass

    def previous(self):
        """Precondition: hasPrevious returns True.
        Postcondition: The current item is has moved to the left one iten"""
        if self._current.getPrevious() is True:
            self._current = self._current.getPrevious()

        #pass

    def insertAfter(self, item):
        """Inserts item after the current item, or
        as the only item if the list is empty.  The new item is the
        current item."""
        if self._current is None:
            self._current = Node2Way(item)
            self._header.setNext(self._current)
            self._trailer.setPrevious(self._current)
            self._current.setPrevious(self._header)
            self._current.setNext(self._trailer)
        else :
            newItem = Node2Way(item)
            newItem.setNext(self._current.getNext())
            newItem.setPrevious(self._current)
            self._current.getNext().setPrevious(newItem)
            self._current.setNext(newItem)
            self._current = newItem
        #pass


    def insertBefore(self, item):
        """Inserts item before the current item, or
        as the only item if the list is empty.  The new item is the
        current item."""
        if self._current is None:
            self._current = Node2Way(item)
            self._header.setNext(self._current)
            self._trailer.setPrevious(self._current)
            self._current.setPrevious(self._header)
            self._current.setNext(self._trailer)
        else :
            newItem = Node2Way(item)
            newItem.setNext(self._current)
            newItem.setPrevious(self._current.getPrevious())
            self._current.getPrevious().setNext(newItem)
            self._current.setPrevious(newItem)
            self._current = newItem

        #pass

    def getCurrent(self):
        """ Returns the current item without removing it or changing the
        current position.
        Precondition:  the list is not empty"""
        if self.isEmpty() is False:
            return self._current
        #pass

    def remove(self):
        """Removes and returns the current item. Making the next item
        the current item if one exists; otherwise the tail item in the
        list is the current item.
        Precondition: the list is not empty."""
        if self.isEmpty() is False:
            removedItem = self._current
            self._current.getNext().setPrevious(removedItem.getPrevious())
            self._current.getPrevious().setNext(removedItem.getNext())
            self._current = self._current.getNext()
            return removedItem
        #pass

    def replace(self, newItemValue):
        """Replaces the current item by the newItemValue.
        Precondition: the list is not empty."""
        if self.isEmpty() is False:
            newItem = Node2Way(newItemValue)
            newItem.setPrevious(self._current.getPrevious())
            newItem.setNext(self._current.getNext())
            self._current.getPrevious().setNext(newItem)
            self._current.getNext().setPrevious(newItem)
            self._current = newItem
        #pass

    def isEmpty(self):
        if self._current is None:
            return True
        else :
            return False
        #pass

    def __len__(self):
        """ Returns the number of items in the list."""
        # replace below
        counter = 0
        tempCursor = self._header.getNext()
        while tempCursor is not self._trailer:
            counter += 1
            tempCursor = tempCursor.getNext()
        return counter

    def __str__(self):
        """Includes items from first through last."""
        # replace below
        bufferString = ""
        tempCursor = self._header.getNext()
        while tempCursor is not self._trailer:
            bufferString += tempCursor.getData()
            tempCursor = tempCursor.getNext()
        return bufferString
""" Testing the methods and putting test data """
c1 = CursorBasedList()
c2 = CursorBasedList()
c1.insertAfter('testData1')
c1.insertBefore('someData')
c2.insertBefore('testData2')
print('c1 evals to:')
print(c1)
