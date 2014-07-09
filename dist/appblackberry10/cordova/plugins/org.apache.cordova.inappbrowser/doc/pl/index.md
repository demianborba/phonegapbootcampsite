<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# org.apache.cordova.inappbrowser

Plugin daje widok przeglądarki sieci web, które są wyświetlane podczas wywoływania `window.open()` , lub kiedy otwarcie łącza utworzone jako`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**Uwaga**: The InAppBrowser okno zachowuje się jak standardowe przeglądarki, a nie ma dostępu do API Cordova.

## Instalacji

    cordova plugin add org.apache.cordova.inappbrowser
    

### Firefox OS

Tworzenie **www/manifest.webapp** , jak opisano w [Dokumentach Manifest][1]. Dodaj odpowiednie permisions.

 [1]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

    "permissions": {
        "browser": {}
    }
    

## window.open

Otwiera URL w nowym `InAppBrowser` wystąpienie, bieżące wystąpienie przeglądarki lub przeglądarki systemu.

    var ref = window.open (adres url, docelowy opcje);
    

*   **ref**: odniesienie do `InAppBrowser` okna. *(InAppBrowser)*

*   **adres**: adres URL do ładowania *(ciąg)*. Wywołanie `encodeURI()` na to, czy adres URL zawiera znaki Unicode.

*   **miejsce docelowe**: miejsce docelowe, w którym wobec ciężar ten URL parametr opcjonalny, który domyślnie `_self` . *(String)*
    
    *   `_self`: Otwiera w Cordova WebView, jeśli adres URL jest na białej liście, inaczej ono otwiera w`InAppBrowser`.
    *   `_blank`: Otwiera w`InAppBrowser`.
    *   `_system`: Otwiera w przeglądarce internetowej systemu.

*   **Opcje**: opcje dla `InAppBrowser` . Opcjonalnie, nie stawiła się: `location=yes` . *(String)*
    
    `options`Ciąg nie może zawierać żadnych spacji, i pary nazwa/wartość każdej funkcji muszą być oddzielone przecinkami. Nazwy funkcji jest rozróżniana. Wszystkich platform obsługuje wartości poniżej:
    
    *   **Lokalizacja**: zestaw `yes` lub `no` Aby włączyć `InAppBrowser` na pasek lub wyłączyć.
    
    Android:
    
    *   **closebuttoncaption**: aby użyć jak **zrobić** przycisk Podpis ustawiona na ciąg.
    *   **ukryte**: zestaw `yes` do stworzenia przeglądarki i ładowania strony, ale nie pokazuje go. Loadstop zdarzenie fires po zakończeniu ładowania. Pominąć lub zestaw `no` (domyślnie) do przeglądarki otworzyć i załadować normalnie.
    *   **ClearCache**: zestaw `yes` do przeglądarki w pamięci podręcznej plików cookie wyczyszczone zanim otworzy się nowe okno
    *   **clearsessioncache**: zestaw `yes` mieć w pamięci podręcznej plików cookie sesji wyczyszczone zanim otworzy się nowe okno
    
    tylko iOS:
    
    *   **closebuttoncaption**: aby użyć jak **zrobić** przycisk Podpis ustawiona na ciąg. Należy pamiętać, że trzeba zlokalizować tę wartość siebie.
    *   **disallowoverscroll**: zestaw `yes` lub `no` (domyślnie `no` ). Włącza/wyłącza właściwość UIWebViewBounce.
    *   **ukryte**: zestaw `yes` do stworzenia przeglądarki i ładowania strony, ale nie pokazuje go. Loadstop zdarzenie fires po zakończeniu ładowania. Pominąć lub zestaw `no` (domyślnie) do przeglądarki otworzyć i załadować normalnie.
    *   **ClearCache**: zestaw `yes` do przeglądarki w pamięci podręcznej plików cookie wyczyszczone zanim otworzy się nowe okno
    *   **clearsessioncache**: zestaw `yes` mieć w pamięci podręcznej plików cookie sesji wyczyszczone zanim otworzy się nowe okno
    *   **pasek narzędzi**: zestaw `yes` lub `no` Aby włączyć pasek narzędzi lub wyłączyć dla InAppBrowser (domyślnie`yes`)
    *   **enableViewportScale**: zestaw `yes` lub `no` Aby zapobiec rzutni skalowanie za pomocą tagu meta (domyślnie`no`).
    *   **mediaPlaybackRequiresUserAction**: zestaw `yes` lub `no` Aby zapobiec HTML5 audio lub wideo z Autoodtwarzanie (domyślnie`no`).
    *   **allowInlineMediaPlayback**: zestaw `yes` lub `no` Aby w linii HTML5 odtwarzanie, wyświetlanie w oknie przeglądarki, a nie interfejs odtwarzanie specyficzne dla urządzenia. HTML `video` również musi zawierać element `webkit-playsinline` atrybut (domyślnie`no`)
    *   **keyboardDisplayRequiresUserAction**: zestaw `yes` lub `no` Aby otworzyć klawiaturę ekranową, gdy elementy formularza ostrości za pomocą JavaScript `focus()` połączenia (domyślnie`yes`).
    *   **suppressesIncrementalRendering**: zestaw `yes` lub `no` czekać, aż wszystkie nowe widok zawartości jest otrzymane przed renderowany (domyślnie`no`).
    *   **presentationstyle**: zestaw `pagesheet` , `formsheet` lub `fullscreen` Aby ustawić [styl prezentacji][2] (domyślnie`fullscreen`).
    *   **transitionstyle**: zestaw `fliphorizontal` , `crossdissolve` lub `coververtical` Aby ustawić [styl przejścia][3] (domyślnie`coververtical`).
    *   **toolbarposition**: zestaw `top` lub `bottom` (domyślnie `bottom` ). Powoduje, że pasek ma być na górze lub na dole okna.

 [2]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [3]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   Jeżyna 10
*   iOS
*   Windows Phone 7 i 8

### Przykład

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## InAppBrowser

Obiekt zwrócony z wywołania`window.open`.

### Metody

*   metody addEventListener
*   removeEventListener
*   Zamknij
*   Pokaż
*   executeScript
*   insertCSS

## metody addEventListener

> Dodaje detektor zdarzenia z`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **ref**: odniesienie do `InAppBrowser` okna *(InAppBrowser)*

*   **EventName**: zdarzenie słuchać *(String)*
    
    *   **loadstart**: zdarzenie gdy odpalam `InAppBrowser` zaczyna się ładować adresu URL.
    *   **loadstop**: zdarzenie gdy odpalam `InAppBrowser` zakończeniu ładowania adresu URL.
    *   **LoadError**: zdarzenie odpala gdy `InAppBrowser` napotka błąd podczas ładowania adresu URL.
    *   **wyjście**: zdarzenie gdy odpalam `InAppBrowser` okno jest zamknięte.

*   **wywołania zwrotnego**: funkcja, która wykonuje, gdy zdarzenie. Funkcja jest przekazywany `InAppBrowserEvent` obiektu jako parametr.

### Właściwości InAppBrowserEvent

*   **Typ**: eventname, albo `loadstart` , `loadstop` , `loaderror` , lub `exit` . *(String)*

*   **adres**: adres URL, który został załadowany. *(String)*

*   **Kod**: kod błędu, tylko w przypadku `loaderror` . *(Liczba)*

*   **wiadomość**: komunikat o błędzie, tylko w przypadku `loaderror` . *(String)*

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 7 i 8

### Szybki przykład

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
    

## removeEventListener

> Usuwa detektor zdarzenia z`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **ref**: odniesienie do `InAppBrowser` okna. *(InAppBrowser)*

*   **EventName**: zdarzenie przestanie słuchać. *(String)*
    
    *   **loadstart**: zdarzenie gdy odpalam `InAppBrowser` zaczyna się ładować adresu URL.
    *   **loadstop**: zdarzenie gdy odpalam `InAppBrowser` zakończeniu ładowania adresu URL.
    *   **LoadError**: zdarzenie odpala gdy `InAppBrowser` napotka błąd ładowania adresu URL.
    *   **wyjście**: zdarzenie gdy odpalam `InAppBrowser` okno jest zamknięte.

*   **wywołania zwrotnego**: funkcja do wykonania, gdy zdarzenie. Funkcja jest przekazywany `InAppBrowserEvent` obiektu.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 7 i 8

### Szybki przykład

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Zamknij

> Zamyka `InAppBrowser` okna.

    ref.Close();
    

*   **ref**: odniesienie do `InAppBrowser` okna *(InAppBrowser)*

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 7 i 8

### Szybki przykład

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Pokaż

> Wyświetla InAppBrowser okno, który został otwarty ukryte. Zawód ten jest ignorowany, jeśli InAppBrowser już był widoczny.

    ref.show();
    

*   **ref**: odwołanie do InAppBrowser (okno`InAppBrowser`)

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS

### Szybki przykład

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();
    

## executeScript

> Wstrzykuje kod JavaScript w `InAppBrowser` okna

    ref.executeScript(details, callback);
    

*   **ref**: odniesienie do `InAppBrowser` okna. *(InAppBrowser)*

*   **injectDetails**: Szczegóły dotyczące skryptu, określając albo `file` lub `code` klucz. *(Obiekt)*
    
    *   **plik**: adres URL skryptu, aby wstrzyknąć.
    *   **Kod**: tekst skryptu, aby wstrzyknąć.

*   **wywołania zwrotnego**: funkcja, która wykonuje po kod JavaScript jest wstrzykiwany.
    
    *   Jeśli taki skrypt jest typu `code` , wykonuje wywołanie zwrotne z pojedynczym parametrem, który jest wartość zwracana przez skrypt, owinięte w `Array` . Dla wielu linii skrypty to wartość zwracana ostatniej instrukcja, lub ostatni wyrażenie oceniane.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS

### Szybki przykład

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });
    

## insertCSS

> Wstrzykuje CSS w `InAppBrowser` okna.

    ref.insertCSS(details, callback);
    

*   **ref**: odniesienie do `InAppBrowser` okna *(InAppBrowser)*

*   **injectDetails**: Szczegóły dotyczące skryptu, określając albo `file` lub `code` klucz. *(Obiekt)*
    
    *   **plik**: URL arkusza stylów do wsuwania.
    *   **Kod**: tekst z arkusza stylów do wstrzykiwania.

*   **wywołania zwrotnego**: funkcja, która wykonuje po CSS jest wstrzykiwany.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS

### Szybki przykład

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });