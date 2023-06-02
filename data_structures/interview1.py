#!/usr/bin/env python3

arr1 = [1, 2, 3, 4, 5, 7]
arr2 = [9, 8, 7, 6]


def checkCommonElement(list1, list2):
    dict = {}
    for x in list1:
        dict.update({x: True})

    print

    for x in list2:
        if x in dict:
            return dict[x]
    return False


print(checkCommonElement(arr1, arr2))
