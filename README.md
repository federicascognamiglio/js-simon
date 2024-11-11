## BRIEF
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

### DATI
1. 5 Numeri random
2. 5 Numeri dell'utente

### ESECUZIONE LOGICA
- Genero 5 numeri random e li salvo
- Faccio partire un timer di 30 secondi
- Fermo il timer a 30 secondi
    - scompaiono numeri random
    - appaiono 5 input
- Confronto i valori inseriti negli input con i 5 numeri generati
    - **SE** il valore inserito corrisponde ad uno dei numeri
        il numero è corretto
        lo salvo
    - **ALTRIMENTI** il numero non è corretto
