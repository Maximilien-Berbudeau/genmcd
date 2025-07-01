### **PHASE 2 : SETUP TECHNIQUE AVEC DISPATCHING (0.5 jour)**

#### ⚙️ **2.1 Setup Frontend avec SuperClaude (via Claude Cursor)**

**Si complexité ≤ 4 → Claude Cursor :**
```
"SuperClaude, /build --init --[FRAMEWORK] --magic --persona-frontend

Setup basique [FRAMEWORK_FRONTEND] :
- Structure projet standardisée
- Configuration [BUILD_TOOL] optimisée
- [STYLING_FRAMEWORK] avec thème responsive
- Composants de base et routing
- Tests unitaires configurés"
```

**Si complexité ≥ 6 → Handoff vers Claude Code :**
```
🔄 HANDOFF vers Claude Code

Tâche complexe détectée : Setup Frontend Avancé
Complexité : 7/10
Recommandation : Claude Code

Context pour Claude Code :
- Framework : [FRAMEWORK_FRONTEND] 
- Architecture : [PATTERNS_AVANCÉS]
- Intégrations : [SERVICES_COMPLEXES]
- Performance : [OPTIMISATIONS_REQUISES]

Fichier: .taskmaster/sync/handoff-frontend.md créé
```

#### 🔗 **2.2 Setup Backend avec Dispatching**

**Analyse automatique :**
```bash
# Vérification complexité backend
BACKEND_COMPLEXITY=$(jq -r '.tasks[] | select(.title | contains("backend") or contains("API")) | .complexity' .taskmaster/reports/task-complexity-report.json)

if [ "$BACKEND_COMPLEXITY" -le 4 ]; then
    echo "🎯 Backend simple - Claude Cursor"
else
    echo "🚀 Backend complexe - Claude Code recommandé"
fi
```

#### 📊 **2.3 Supabase avec Edge Functions**

```
"Supabase MCP, implémentation schéma [NOM_PROJET] :

Phase setup :
- Création tables avec contraintes optimisées
- Configuration RLS policies par rôle
- Types TypeScript générés et synchronisés
- Edge Functions pour [LOGIQUE_BUSINESS]
- Monitoring et alertes basiques"
```

#### 🚀 **2.4 Netlify avec CI/CD Automatique**

```
"Netlify MCP, configuration déploiement [NOM_PROJET] :

Setup production-ready :
- Site avec build automatique multi-environnement
- Variables environnement sécurisées par stage
- Redirections et headers optimisés
- Monitoring performance et uptime
- Intégration Git avec preview deployments"
```

#### 🔄 **2.5 Synchronisation Git avec TaskMaster**

**Configuration hooks avancés :**
```bash
# Hook pre-commit avec validation
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# PROCESS-MAXV3 - Pre-commit validation

echo "🔍 Validation PROCESS-MAXV3..."

# Validation TaskMaster
task-master validate-dependencies

# Mise à jour métriques dispatching
bash .taskmaster/scripts/metrics.sh

# Génération sync status
task-master list --summary > .taskmaster/sync/pre-commit-status.md

echo "✅ Validation terminée"
EOF

chmod +x .git/hooks/pre-commit
```

**✅ Livrables Phase 2 :**
- Frontend configuré selon complexité (Cursor ou Code)
- Backend setup avec dispatching intelligent
- Supabase opérationnel avec types générés
- Netlify CI/CD configuré
- Git automation avec métriques dispatching

---