# GettingStartedWithHystrix
Rapide introduction à Hystrix

Contient un projet d'API de test, deux projets d'API partenaire, un script de test Gatling

# Api

Projet Spring boot qui implémente les exemples d'appel aux API partenaire avec et sans hystrix.

Se lance comme un projet boot 

```
mvn sprint-boot:run
```

Expose sur le port 8080 les services :

```
http://localhost:8080/api/durations
http://localhost:8080/api/healthcheck
```

Pour changer d'implémentation, aller dans `com.vsct.pizzbeer.controller.MyApi` et changer les commentaires dans la méthode `getDurations`


# PartnerApi1 

Projet Spring boot qui implémente une API bête et méchante

Se lance comme un projet boot 

```
mvn sprint-boot:run
```

Expose sur le port 8090 le service :

```
http://localhost:8090/partner/duration
```

Latence configurable dans l'application.properties via les clefs

```
duration.randomPart=100
duration.fixedPart=50
```

# PartnerApi2

Idem PartnerApi1 , surl e port 8091, avec en plus la possibilité de provoquer des erreurs 500 :

```
error.mode=false
```

# Gatling

Script de charge dans `user-files/simulations/pizzbeer`
Quelques exemples de résultats dans `results`
