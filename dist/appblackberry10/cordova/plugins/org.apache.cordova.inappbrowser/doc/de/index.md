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

Dieses Plugin bietet eine Web-Browser-Ansicht, die anzeigt, beim Aufrufen von `window.open()` , oder als als bildeten einen Link öffnen`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**Hinweis**: die InAppBrowser Fenster verhält sich wie einen standard-Webbrowser und Cordova APIs kann nicht zugegriffen werden kann.

## Installation

    cordova plugin add org.apache.cordova.inappbrowser
    

### Firefox OS

Erstellen Sie **www/manifest.webapp** , wie in [Docs Manifest][1]beschrieben. Fügen Sie die entsprechenden Permisions.

 [1]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

    "permissions": {
        "browser": {}
    }
    

## window.open

Öffnet eine URL in einem neuen `InAppBrowser` Instanz, die aktuelle Browserinstanz oder der Systembrowser.

    Var Ref = window.open (Url, Ziel, Optionen);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster. *(InAppBrowser)*

*   **URL**: die URL *(String)*zu laden. Rufen Sie `encodeURI()` auf diese Option, wenn die URL enthält Unicode-Zeichen.

*   **Ziel**: das Ziel in der URL, einen optionalen Parameter geladen, die standardmäßig auf `_self` . *(String)*
    
    *   `_self`: Öffnet sich in der Cordova WebView wenn der URL in der Whitelist ist, andernfalls es öffnet sich in der`InAppBrowser`.
    *   `_blank`: Öffnet den`InAppBrowser`.
    *   `_system`: Öffnet in den System-Web-Browser.

*   **Optionen**: Optionen für die `InAppBrowser` . Optional, säumige an: `location=yes` . *(String)*
    
    Die `options` Zeichenfolge muss keine Leerstelle enthalten, und jede Funktion Name/Wert-Paare müssen durch ein Komma getrennt werden. Featurenamen Groß-/Kleinschreibung. Alle Plattformen unterstützen die anderen Werte:
    
    *   **Lage**: Legen Sie auf `yes` oder `no` , machen die `InAppBrowser` der Adressleiste ein- oder ausschalten.
    
    Nur Android:
    
    *   **Closebuttoncaption**: Legen Sie auf eine Zeichenfolge als Beschriftung der **fertig** -Schaltfläche verwenden.
    *   **versteckte**: Legen Sie auf `yes` um den Browser zu erstellen und laden Sie die Seite, aber nicht zeigen. Das Loadstop-Ereignis wird ausgelöst, wenn der Ladevorgang abgeschlossen ist. Weglassen oder auf `no` (Standard), den Browser öffnen und laden normalerweise zu haben.
    *   **ClearCache**: Legen Sie auf `yes` , der Browser ist Cookiecache gelöscht, bevor das neue Fenster geöffnet wird
    *   **Clearsessioncache**: Legen Sie auf `yes` , der Sitzungs-Cookie Cache gelöscht, bevor das neue Fenster geöffnet wird
    
    iOS nur:
    
    *   **Closebuttoncaption**: Legen Sie auf eine Zeichenfolge als Beschriftung der **fertig** -Schaltfläche verwenden. Beachten Sie, dass Sie diesen Wert selbst zu lokalisieren müssen.
    *   **Disallowoverscroll**: Legen Sie auf `yes` oder `no` (Standard ist `no` ). Aktiviert/deaktiviert die UIWebViewBounce-Eigenschaft.
    *   **versteckte**: Legen Sie auf `yes` um den Browser zu erstellen und laden Sie die Seite, aber nicht zeigen. Das Loadstop-Ereignis wird ausgelöst, wenn der Ladevorgang abgeschlossen ist. Weglassen oder auf `no` (Standard), den Browser öffnen und laden normalerweise zu haben.
    *   **ClearCache**: Legen Sie auf `yes` , der Browser ist Cookiecache gelöscht, bevor das neue Fenster geöffnet wird
    *   **Clearsessioncache**: Legen Sie auf `yes` zu der Session Cookie Cache gelöscht, bevor das neue Fenster geöffnet wird
    *   **Symbolleiste**: Legen Sie auf `yes` oder `no` Aktivieren Sie die Symbolleiste ein- oder Ausschalten für InAppBrowser (Standard:`yes`)
    *   **EnableViewportScale**: Legen Sie auf `yes` oder `no` , Viewport Skalierung durch ein Meta-Tag (standardmäßig zu verhindern`no`).
    *   **MediaPlaybackRequiresUserAction**: Legen Sie auf `yes` oder `no` , HTML5 audio oder video von automatisches Abspielen (standardmäßig zu verhindern`no`).
    *   **AllowInlineMediaPlayback**: Legen Sie auf `yes` oder `no` Inline-HTML5-Media-Wiedergabe, Darstellung im Browser-Fenster, sondern in eine gerätespezifische Wiedergabe-Schnittstelle ermöglichen. Des HTML `video` Element muss auch die `webkit-playsinline` Attribut (Standard:`no`)
    *   **KeyboardDisplayRequiresUserAction**: Legen Sie auf `yes` oder `no` um die Tastatur zu öffnen, wenn Formularelemente Fokus per JavaScript erhalten `focus()` Anruf (Standard:`yes`).
    *   **SuppressesIncrementalRendering**: Legen Sie auf `yes` oder `no` zu warten, bis alle neuen anzeigen-Inhalte empfangen wird, bevor Sie wiedergegeben wird (standardmäßig`no`).
    *   **Presentationstyle**: Legen Sie auf `pagesheet` , `formsheet` oder `fullscreen` [Präsentationsstil][2] (standardmäßig fest`fullscreen`).
    *   **Transitionstyle**: Legen Sie auf `fliphorizontal` , `crossdissolve` oder `coververtical` [Übergangsstil][3] (standardmäßig fest`coververtical`).
    *   **Toolbarposition**: Legen Sie auf `top` oder `bottom` (Standard ist `bottom` ). Bewirkt, dass die Symbolleiste am oberen oder unteren Rand des Fensters sein.

 [2]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [3]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 und 8

### Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## InAppBrowser

Aus einem Aufruf zurückgegebenen Objekts`window.open`.

### Methoden

*   addEventListener
*   removeEventListener
*   Schließen
*   Karte
*   executeScript
*   insertCSS

## addEventListener

> Fügt einen Listener für eine Veranstaltung aus der`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster *(InAppBrowser)*

*   **EventName**: das Ereignis zu warten *(String)*
    
    *   **Loadstart**: Ereignis wird ausgelöst, wenn die `InAppBrowser` beginnt, eine URL zu laden.
    *   **Loadstop**: Ereignis wird ausgelöst, wenn der `InAppBrowser` beendet ist, eine URL laden.
    *   **LoadError**: Ereignis wird ausgelöst, wenn der `InAppBrowser` ein Fehler auftritt, wenn Sie eine URL zu laden.
    *   **Ausfahrt**: Ereignis wird ausgelöst, wenn das `InAppBrowser` -Fenster wird geschlossen.

*   **Rückruf**: die Funktion, die ausgeführt wird, wenn das Ereignis ausgelöst wird. Die Funktion übergeben wird ein `InAppBrowserEvent` -Objekt als Parameter.

### InAppBrowserEvent Eigenschaften

*   **Typ**: Eventname, entweder `loadstart` , `loadstop` , `loaderror` , oder `exit` . *(String)*

*   **URL**: die URL, die geladen wurde. *(String)*

*   **Code**: der Fehler-Code, nur im Fall von `loaderror` . *(Anzahl)*

*   **Nachricht**: die Fehlermeldung angezeigt, nur im Fall von `loaderror` . *(String)*

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 7 und 8

### Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
    

## removeEventListener

> Entfernt einen Listener für eine Veranstaltung aus der`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster. *(InAppBrowser)*

*   **EventName**: das Ereignis zu warten. *(String)*
    
    *   **Loadstart**: Ereignis wird ausgelöst, wenn die `InAppBrowser` beginnt, eine URL zu laden.
    *   **Loadstop**: Ereignis wird ausgelöst, wenn der `InAppBrowser` beendet ist, eine URL laden.
    *   **LoadError**: Ereignis wird ausgelöst, wenn die `InAppBrowser` trifft einen Fehler beim Laden einer URLs.
    *   **Ausfahrt**: Ereignis wird ausgelöst, wenn das `InAppBrowser` -Fenster wird geschlossen.

*   **Rückruf**: die Funktion ausgeführt, wenn das Ereignis ausgelöst wird. Die Funktion übergeben wird ein `InAppBrowserEvent` Objekt.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 7 und 8

### Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Schließen

> Schließt die `InAppBrowser` Fenster.

    Ref.Close();
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster *(InAppBrowser)*

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 7 und 8

### Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Karte

> Zeigt ein InAppBrowser-Fenster, das geöffnet wurde, versteckt. Aufrufen, dies hat keine Auswirkungen, wenn die InAppBrowser schon sichtbar war.

    Ref.Show();
    

*   **Ref**: Verweis auf die (InAppBrowser) Fenster`InAppBrowser`)

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS

### Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();
    

## executeScript

> Fügt JavaScript-Code in das `InAppBrowser` Fenster

    ref.executeScript(details, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster. *(InAppBrowser)*

*   **InjectDetails**: Informationen über das Skript ausgeführt, angeben, entweder ein `file` oder `code` Schlüssel. *(Objekt)*
    
    *   **Datei**: URL des Skripts zu injizieren.
    *   **Code**: Text des Skripts zu injizieren.

*   **Rückruf**: die Funktion, die ausgeführt wird, nachdem der JavaScript-Code injiziert wird.
    
    *   Wenn das eingefügte Skript vom Typ ist `code` , der Rückruf führt mit einen einzelnen Parameter, der der Rückgabewert des Skripts ist, umwickelt ein `Array` . Bei Multi-Line-Skripten ist der Rückgabewert von der letzten Anweisung oder den letzten Ausdruck ausgewertet.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS

### Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });
    

## insertCSS

> Injiziert CSS in der `InAppBrowser` Fenster.

    ref.insertCSS(details, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster *(InAppBrowser)*

*   **InjectDetails**: Informationen über das Skript ausgeführt, angeben, entweder ein `file` oder `code` Schlüssel. *(Objekt)*
    
    *   **Datei**: URL des Stylesheets zu injizieren.
    *   **Code**: Text des Stylesheets zu injizieren.

*   **Rückruf**: die Funktion, die ausgeführt wird, nachdem die CSS injiziert wird.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS

### Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });