---
title: Python Ord Function
localeTitle: Функция орфографии Python
---
## Функция орда

`ord()` является встроенной функцией в Python 3, чтобы преобразовать строку, представляющую один символ Unicode, в целое число представляющий код Юникода символа.

#### Примеры:
```
>>> ord('d') 
 100 
 >>> ord('1') 
 49 
```

## функция chr

`chr()` - встроенная функция в Python 3, чтобы преобразовать целое число представляя код Unicode в строку, представляющую соответствующий символ.

#### Примеры:
```
>>> chr(49) 
 '1' 
```

Следует отметить, что если целочисленное значение, переданное в `chr()` , выходит за допустимый диапазон, то ValueError будет поднят.
```
>>> chr(-10) 
 'Traceback (most recent call last): 
  File "<pyshell#24>", line 1, in <module> 
    chr(-1) 
 ValueError: chr() arg not in range(0x110000)' 

```