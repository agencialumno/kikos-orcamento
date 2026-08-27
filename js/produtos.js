// Catálogo de produtos — SEM preço, parcelamento ou desconto.
// Catálogo completo: Titan, Monster, Esteiras, Bikes, Elípticos, Escada e Remo,
// Hammer Force, Alfa, Classic, Plate Load, Titanium, Station, Acessórios, Dual.
// (Monster Select foi mesclada dentro de Monster.)
//
// PENDENTE — aguardando foto oficial (produtos ainda não publicados no site
// da Kikos nem encontrados em nenhuma fonte; status "NOVO" na planilha em
// 21/08/2026). Adicionar assim que houver foto:
//
//   MONSTER GOAT (24 itens, entram em categoria "Monster"):
//   MG12 Peck Deck (I027868) · MG13 Supino Reto (I027865) · MG20 Crossover (I027863)
//   MG21 Deltoide (I027864) · MG22 Peitoral Dorsal (I027869) · MG23 Desenvolvimento
//   de Ombros (I027873) · MG30 Pull Down (I027876) · MG31 Remada Baixa (I027877)
//   MG33 Puxada Alta (I027875) · MG34 Remada (I027874) · MG40 Bíceps (I027861)
//   MG42 Tríceps (I027862) · MG51 Abdominal (I027860) · MG52 Lombar (I027859)
//   MG53 Total Hip (I027858) · MG60 Gráviton (I027866) · MG70 Leg Horizontal
//   (I027872) · MG71 Cadeira Extensora (I027854) · MG72 Cadeira Flexora (I027856)
//   MG73 Mesa Flexora (I027855) · MG74 Cadeira Abdutora (I027870) · MG75 Cadeira
//   Adutora (I027871) · MG77 Panturrilha em Pé (I027867) · MG78 Glúteo (I027857)
//
//   HAMMER FORCE "PM" (7 itens, entram em categoria "Hammer Force"):
//   PM 2037 Bíceps (I027773) · PM 2038 Supino Reto (I027774) · PM 2041
//   Desenvolvimento de Ombro (I027777) · PM 2042 Supino Declinado (I027778)
//   PM 2043 Tríceps (I027779) · PM 2046 Abdominal (I027782) · PM 2048 Cadeira
//   Extensora (I027784)
//
//   ACESSÓRIOS: falta 1 item — "Barra Reta 1.20m Cromada com Presilha
//   Olímpica" (OB47S) — aguardando foto (id 302 já cadastrado, sem foto).
//
//   PENDENTE DE DECISÃO (não incluído nesta consolidação — falta confirmar
//   com Victor antes de aplicar):
//   - "Halter Sextavado Rubber Kikos Pro" (foto recebida em
//     fotos_site_halter_sextavado_rubber_kikos_pro_sem_peso_001_1.jpg):
//     ainda não confirmado se é o mesmo item do id 213 (MD2102) ou um
//     produto novo e separado. NÃO adicionado até essa definição.
//   - Campo "vendido em pares/kit" (halteres, dumbbells, suporte com
//     halteres já incluídos): produtos.js ainda não tem estrutura para
//     isso. Precisa ver js/catalogo.js (ou equivalente) antes de decidir
//     o formato (campo `observacao` vs. embutir no `nome`).
//
const produtos = [

  // ── LINHA TITAN ──────────────────────────────────────
  { id: 1, nome: "Supino Reto", codigo: "Y905", categoria: "Titan", foto: "assets/images/produtos/titan/y905.jpg" },
  { id: 2, nome: "Supino Declinado", codigo: "Y910", categoria: "Titan", foto: "assets/images/produtos/titan/y910.jpg" },
  { id: 3, nome: "Supino Inclinado", codigo: "Y915", categoria: "Titan", foto: "assets/images/produtos/titan/y915.jpg" },
  { id: 4, nome: "Puxada Alta", codigo: "Y920", categoria: "Titan", foto: "assets/images/produtos/titan/y920.jpg" },
  { id: 5, nome: "Remada Baixa", codigo: "Y925", categoria: "Titan", foto: "assets/images/produtos/titan/y925.jpg" },
  { id: 6, nome: "Remada", codigo: "Y930", categoria: "Titan", foto: "assets/images/produtos/titan/y930.jpg" },
  { id: 7, nome: "Desenvolvimento Ombro", codigo: "Y935", categoria: "Titan", foto: "assets/images/produtos/titan/y935.jpg" },
  { id: 8, nome: "Glúteo", codigo: "Y940", categoria: "Titan", foto: "assets/images/produtos/titan/y940.jpg" },
  { id: 9, nome: "Extensora", codigo: "Y960", categoria: "Titan", foto: "assets/images/produtos/titan/y960.jpg" },
  { id: 10, nome: "Tríceps", codigo: "Y965", categoria: "Titan", foto: "assets/images/produtos/titan/y965.jpg" },
  { id: 11, nome: "Bíceps", codigo: "Y970", categoria: "Titan", foto: "assets/images/produtos/titan/y970.jpg" },

  // ── LINHA MONSTER ────────────────────────────────────
  { id: 12, nome: "Super Horizontal Multi Press", codigo: "PT01", categoria: "Monster", foto: "assets/images/produtos/monster/pt01.jpg" },
  { id: 13, nome: "Super Vertical Chest Press", codigo: "PT01A", categoria: "Monster", foto: "assets/images/produtos/monster/pt01a.jpg" },
  { id: 14, nome: "Super Rowing", codigo: "PT04", categoria: "Monster", foto: "assets/images/produtos/monster/pt04.jpg" },
  { id: 15, nome: "T-Bar Row", codigo: "PT04A", categoria: "Monster", foto: "assets/images/produtos/monster/pt04a.jpg" },
  { id: 16, nome: "French Press Machine", codigo: "PT07", categoria: "Monster", foto: "assets/images/produtos/monster/pt07.jpg" },
  { id: 17, nome: "Super Power Row", codigo: "PT10", categoria: "Monster", foto: "assets/images/produtos/monster/pt10.jpg" },
  { id: 18, nome: "Super Lat Machine Convergent", codigo: "PT12", categoria: "Monster", foto: "assets/images/produtos/monster/pt12.jpg" },
  { id: 19, nome: "Super High Row", codigo: "PT12C", categoria: "Monster", foto: "assets/images/produtos/monster/pt12c.jpg" },
  { id: 20, nome: "Super Pendulum Squat", codigo: "PT13", categoria: "Monster", foto: "assets/images/produtos/monster/pt13.jpg" },
  { id: 21, nome: "Super Leg Press 45°", codigo: "PT15A", categoria: "Monster", foto: "assets/images/produtos/monster/pt15a.jpg" },
  { id: 22, nome: "Standing Abductor", codigo: "PT17", categoria: "Monster", foto: "assets/images/produtos/monster/pt17.jpg" },
  { id: 23, nome: "Power Smith Machine Dual System", codigo: "PT19", categoria: "Monster", foto: "assets/images/produtos/monster/pt19.jpg" },
  { id: 24, nome: "Vertical Leg Press", codigo: "PT20", categoria: "Monster", foto: "assets/images/produtos/monster/pt20.jpg" },
  { id: 25, nome: "Hip Thrust", codigo: "PT21", categoria: "Monster", foto: "assets/images/produtos/monster/pt21.jpg" },
  { id: 26, nome: "Shoulder Press", codigo: "BH03", categoria: "Monster", foto: "assets/images/produtos/monster/bh03.jpg" },
  { id: 27, nome: "Standing Hip Thrust", codigo: "BH11", categoria: "Monster", foto: "assets/images/produtos/monster/bh11.jpg" },
  { id: 28, nome: "Leg Extension", codigo: "BH14", categoria: "Monster", foto: "assets/images/produtos/monster/bh14.jpg" },
  { id: 29, nome: "Chest Press", codigo: "BH01A", categoria: "Monster", foto: "assets/images/produtos/monster/bh01a.jpg" },
  { id: 30, nome: "Lat Pull Down", codigo: "BH12B", categoria: "Monster", foto: "assets/images/produtos/monster/bh12b.jpg" },

  // ── LINHA MONSTER SELECT ─────────────────────────────
  { id: 31, nome: "Iso-Lateral Super Incline Press", codigo: "MET102", categoria: "Monster", foto: "assets/images/produtos/monster/met102.jpg" },
  { id: 32, nome: "Kneeling Leg Curl", codigo: "MET103", categoria: "Monster", foto: "assets/images/produtos/monster/met103.jpg" },
  { id: 33, nome: "Bicep Trainer", codigo: "MET105", categoria: "Monster", foto: "assets/images/produtos/monster/met105.jpg" },
  { id: 34, nome: "Side Arm Lift Trainer", codigo: "MET106", categoria: "Monster", foto: "assets/images/produtos/monster/met106.jpg" },
  { id: 35, nome: "Reloaded Iso Flat Press", codigo: "MET118", categoria: "Monster", foto: "assets/images/produtos/monster/met118.jpg" },
  { id: 36, nome: "Arm Down Back Muscle Training", codigo: "MET120", categoria: "Monster", foto: "assets/images/produtos/monster/met120.jpg" },

  // ── PRO · ESTEIRAS ───────────────────────────────────
  { id: 37, nome: "Esteira Curva", codigo: "ECK", categoria: "Esteiras", foto: "assets/images/produtos/pro/eck.jpg" },
  { id: 38, nome: "Esteira KX10000i", codigo: "KX10000i", categoria: "Esteiras", foto: "assets/images/produtos/pro/kx10000i.jpg" },
  { id: 39, nome: "Esteira KX9000i", codigo: "KX9000i", categoria: "Esteiras", foto: "assets/images/produtos/pro/kx9000i.jpg" },
  { id: 40, nome: "Esteira T-PRO Run", codigo: "T-PRO RUN", categoria: "Esteiras", foto: "assets/images/produtos/pro/t_pro_run.jpg" },
  { id: 41, nome: "Esteira PRO Run", codigo: "PRO RUN", categoria: "Esteiras", foto: "assets/images/produtos/pro/pro_run.jpg" },
  { id: 42, nome: "Esteira KX8600", codigo: "KX8600", categoria: "Esteiras", foto: "assets/images/produtos/pro/kx8600.jpg" },
  { id: 43, nome: "Esteira KX8500i", codigo: "KX8500i", categoria: "Esteiras", foto: "assets/images/produtos/pro/kx8500i.jpg" },

  // ── PRO · BIKES ──────────────────────────────────────
  { id: 44, nome: "Bike Spinning F13", codigo: "F13", categoria: "Bikes", foto: "assets/images/produtos/pro/f13.jpg" },
  { id: 45, nome: "Bike Magnética MS4000i", codigo: "MS4000i", categoria: "Bikes", foto: "assets/images/produtos/pro/ms4000i.jpg" },
  { id: 46, nome: "Bike Magnética MS2000", codigo: "MS2000", categoria: "Bikes", foto: "assets/images/produtos/pro/ms2000.jpg" },
  { id: 47, nome: "Air Bike ARXi", codigo: "ARXi", categoria: "Bikes", foto: "assets/images/produtos/pro/arxi.jpg" },
  { id: 48, nome: "Bike Vertical KV10.0", codigo: "KV10.0", categoria: "Bikes", foto: "assets/images/produtos/pro/kv10_0.jpg" },
  { id: 49, nome: "Bike Vertical KV9.8iX", codigo: "KV9.8iX", categoria: "Bikes", foto: "assets/images/produtos/pro/kv9_8ix.jpg" },
  { id: 50, nome: "Bike Horizontal KR11.0", codigo: "KR11.0", categoria: "Bikes", foto: "assets/images/produtos/pro/kr11_0.jpg" },
  { id: 51, nome: "Bike Horizontal KR9.9iX", codigo: "KR9.9iX", categoria: "Bikes", foto: "assets/images/produtos/pro/kr9_9ix.jpg" },

  // ── PRO · ELÍPTICOS ──────────────────────────────────
  { id: 52, nome: "Elíptico KE7.7", codigo: "KE7.7", categoria: "Elípticos", foto: "assets/images/produtos/pro/ke7_7.jpg" },
  { id: 53, nome: "Elíptico KE5.5", codigo: "KE5.5", categoria: "Elípticos", foto: "assets/images/produtos/pro/ke5_5.jpg" },

  // ── PRO · ESCADA E REMO ──────────────────────────────
  { id: 54, nome: "Escada T20.0", codigo: "T20.0", categoria: "Escada e Remo", foto: "assets/images/produtos/pro/t20_0.jpg" },
  { id: 55, nome: "Escada KE19.0", codigo: "KE19.0", categoria: "Escada e Remo", foto: "assets/images/produtos/pro/ke19_0.jpg" },
  { id: 56, nome: "Escada KE17.0i", codigo: "KE17.0i", categoria: "Escada e Remo", foto: "assets/images/produtos/pro/ke17_0i.jpg" },
  { id: 57, nome: "Remo WR200", codigo: "WR200", categoria: "Escada e Remo", foto: "assets/images/produtos/pro/wr200.jpg" },

  // ── PRO · HAMMER FORCE ───────────────────────────────
  { id: 58, nome: "Supino Com Puxada", codigo: "HF-2002", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_supino_com_puxada.jpg" },
  { id: 59, nome: "Remada Divergente", codigo: "HF-2004", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_remada_divergente.jpg" },
  { id: 60, nome: "Puxada Frontal Invertida", codigo: "HF-2005", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_puxada_frontal_invertida.jpg" },
  { id: 61, nome: "Puxada Alta", codigo: "HF-2006", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_puxada_alta.jpg" },
  { id: 62, nome: "Supino Horizontal", codigo: "HF-2007", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_supino_horizontal.jpg" },
  { id: 63, nome: "Remada Baixa", codigo: "HF-2009", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_remada_baixa.jpg" },
  { id: 64, nome: "Remada", codigo: "HF-2011", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_remada.jpg" },
  { id: 65, nome: "Desenvolvimento Gaiola", codigo: "HF-2012", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_desenvolvimento_gaiola.jpg" },
  { id: 66, nome: "Supino Inclinado", codigo: "HF-2013", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_supino_inclinado.jpg" },
  { id: 67, nome: "Supino Gaiola Declinado", codigo: "HF-2014", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_supino_gaiola_declinado.jpg" },
  { id: 68, nome: "Pulldown", codigo: "HF-2015", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_pulldown.jpg" },
  { id: 69, nome: "Tríceps Paralela", codigo: "HF-2018", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_triceps_paralela.jpg" },
  { id: 70, nome: "Cadeira Extensora Unilateral", codigo: "HF-2022", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_cadeira_extensora_unilateral.jpg" },
  { id: 71, nome: "Panturrilha Horizontal", codigo: "HF-2026", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_panturrilha_horizontal.jpg" },
  { id: 72, nome: "Base Terrestre Gaiola", codigo: "HF-2028", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_base_terrestre_gaiola.jpg" },
  { id: 73, nome: "Flexora em Pé Unilateral", codigo: "HF-2031", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_flexora_em_pe_unilateral.jpg" },
  { id: 74, nome: "Abdominal Completo", codigo: "HF-2035", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_abdominal_completo.jpg" },
  { id: 75, nome: "Super Agachamento", codigo: "HF-3017", categoria: "Hammer Force", foto: "assets/images/produtos/pro/hf_super_agachamento.jpg" },

  // ── PRO · ALFA ───────────────────────────────────────
  { id: 76, nome: "Supino Máquina", codigo: "CAS10", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_supino_maquina.jpg" },
  { id: 77, nome: "Peitoral Peck Deck", codigo: "CAS12", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_peitoral_peck_deck.jpg" },
  { id: 78, nome: "Supino Inclinado", codigo: "CAS13", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_supino_inclinado.jpg" },
  { id: 79, nome: "Peitoral / Dorsal", codigo: "CAS22", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_peitoral_dorsal.jpg" },
  { id: 80, nome: "Desenvolvimento Ombro", codigo: "CAS23", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_desenvolvimento_ombro.jpg" },
  { id: 81, nome: "Remada Baixa", codigo: "CAS31", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_remada_baixa.jpg" },
  { id: 82, nome: "Puxador Costas", codigo: "CAS33", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_puxador_costas.jpg" },
  { id: 83, nome: "Remada", codigo: "CAS34", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_remada.jpg" },
  { id: 84, nome: "Scott Máquina", codigo: "CAS40", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_scott_maquina.jpg" },
  { id: 85, nome: "Tríceps", codigo: "CAS42", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_triceps.jpg" },
  { id: 86, nome: "Abdominal", codigo: "CAS51", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_abdominal.jpg" },
  { id: 87, nome: "Lombar", codigo: "CAS52", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_lombar.jpg" },
  { id: 88, nome: "Gráviton", codigo: "CAS60", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_graviton.jpg" },
  { id: 89, nome: "Leg Press", codigo: "CAS70", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_leg_press.jpg" },
  { id: 90, nome: "Cadeira Extensora", codigo: "CAS71", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_cadeira_extensora.jpg" },
  { id: 91, nome: "Cadeira Flexora", codigo: "CAS72", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_cadeira_flexora.jpg" },
  { id: 92, nome: "Mesa Flexora", codigo: "CAS73", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_mesa_flexora.jpg" },
  { id: 93, nome: "Abdutora", codigo: "CAS74", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_abdutora.jpg" },
  { id: 94, nome: "Adutora", codigo: "CAS75", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_adutora.jpg" },
  { id: 95, nome: "Glúteo", codigo: "CAS78", categoria: "Alfa", foto: "assets/images/produtos/pro/alfa_gluteo.jpg" },

  // ── PRO · CLASSIC ────────────────────────────────────
  { id: 96, nome: "Supino Máquina", codigo: "CLS13", categoria: "Classic", foto: "assets/images/produtos/pro/classic_supino_maquina.jpg" },
  { id: 97, nome: "Desenvolvimento Ombro", codigo: "CLS23", categoria: "Classic", foto: "assets/images/produtos/pro/classic_desenvolvimento_ombro.jpg" },
  { id: 98, nome: "Remada Baixa", codigo: "CLS31", categoria: "Classic", foto: "assets/images/produtos/pro/classic_remada_baixa.jpg" },
  { id: 99, nome: "Remada", codigo: "CLS34", categoria: "Classic", foto: "assets/images/produtos/pro/classic_remada.jpg" },
  { id: 100, nome: "Scott Máquina", codigo: "CLS40", categoria: "Classic", foto: "assets/images/produtos/pro/classic_scott_maquina.jpg" },
  { id: 101, nome: "Tríceps", codigo: "CLS42", categoria: "Classic", foto: "assets/images/produtos/pro/classic_triceps.jpg" },
  { id: 102, nome: "Abdominal", codigo: "CLS51", categoria: "Classic", foto: "assets/images/produtos/pro/classic_abdominal.jpg" },
  { id: 103, nome: "Lombar", codigo: "CLS52", categoria: "Classic", foto: "assets/images/produtos/pro/classic_lombar.jpg" },
  { id: 104, nome: "Leg Press Horizontal", codigo: "CLS70", categoria: "Classic", foto: "assets/images/produtos/pro/classic_leg_press_horizontal.jpg" },
  { id: 105, nome: "Cadeira Extensora", codigo: "CLS71", categoria: "Classic", foto: "assets/images/produtos/pro/classic_cadeira_extensora.jpg" },
  { id: 106, nome: "Cadeira Flexora", codigo: "CLS72", categoria: "Classic", foto: "assets/images/produtos/pro/classic_cadeira_flexora.jpg" },
  { id: 107, nome: "Mesa Flexora", codigo: "CLS73", categoria: "Classic", foto: "assets/images/produtos/pro/classic_mesa_flexora.jpg" },
  { id: 108, nome: "Abdutora", codigo: "CLS74", categoria: "Classic", foto: "assets/images/produtos/pro/classic_abdutora.jpg" },
  { id: 109, nome: "Adutora", codigo: "CLS75", categoria: "Classic", foto: "assets/images/produtos/pro/classic_adutora.jpg" },
  { id: 110, nome: "Panturrilha", codigo: "CLS77", categoria: "Classic", foto: "assets/images/produtos/pro/classic_panturrilha.jpg" },
  { id: 111, nome: "Glúteo", codigo: "CLS78", categoria: "Classic", foto: "assets/images/produtos/pro/classic_gluteo.jpg" },
  { id: 112, nome: "Peitoral Fly Dorsal", codigo: "CLS22", categoria: "Classic", foto: "assets/images/produtos/pro/classic_peitoral_fly_dorsal.jpg" },
  { id: 113, nome: "Puxador Costas", codigo: "CLS30", categoria: "Classic", foto: "assets/images/produtos/pro/classic_puxador_costas.jpg" },
  { id: 114, nome: "Gráviton", codigo: "CLS60", categoria: "Classic", foto: "assets/images/produtos/pro/classic_graviton.jpg" },

  // ── PRO · PLATE LOAD ─────────────────────────────────
  { id: 115, nome: "Supino Reto", codigo: "PR13", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_supino_reto.jpg" },
  { id: 116, nome: "Supino Inclinado", codigo: "PR14", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_supino_inclinado.jpg" },
  { id: 117, nome: "Supino Declinado", codigo: "PR15", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_supino_declinado.jpg" },
  { id: 118, nome: "Agachamento Articulado", codigo: "PR16", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_agachamento_articulado.jpg" },
  { id: 119, nome: "Supino Guiado", codigo: "PR17", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_supino_guiado.jpg" },
  { id: 120, nome: "Bíceps", codigo: "PR18", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_biceps.jpg" },
  { id: 121, nome: "Tríceps", codigo: "PR19", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_triceps.jpg" },
  { id: 122, nome: "Peitoral Articulado Inclinado", codigo: "PR21", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_peitoral_articulado_inclinado.jpg" },
  { id: 123, nome: "Desenvolvimento", codigo: "PR23", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_desenvolvimento.jpg" },
  { id: 124, nome: "Abdominal Articulado", codigo: "PR24", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_abdominal_articulado.jpg" },
  { id: 125, nome: "Remada Baixa", codigo: "PR31", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_remada_baixa.jpg" },
  { id: 126, nome: "Remada Inclinada Linear", codigo: "PR32", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_remada_inclinada_linear.jpg" },
  { id: 127, nome: "Puxada Alta", codigo: "PR33", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_puxada_alta.jpg" },
  { id: 128, nome: "Remada", codigo: "PR34", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_remada.jpg" },
  { id: 129, nome: "Puxada Alta com Supino", codigo: "PR35", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_puxada_alta_com_supino.jpg" },
  { id: 130, nome: "Pullover", codigo: "PR36", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_pullover.jpg" },
  { id: 131, nome: "Leg Press 45°", codigo: "PR70", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_leg_press_45.jpg" },
  { id: 132, nome: "Cadeira Extensora", codigo: "PR71", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_cadeira_extensora.jpg" },
  { id: 133, nome: "Flexora em Pé", codigo: "PR72", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_flexora_em_pe.jpg" },
  { id: 134, nome: "Abdutora", codigo: "PR73", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_abdutora.jpg" },
  { id: 135, nome: "Leg Press 90°", codigo: "PR74", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_leg_press_90.jpg" },
  { id: 136, nome: "Leg Press Unilateral", codigo: "PR75", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_leg_press_unilateral.jpg" },
  { id: 137, nome: "Agachamento Sumo", codigo: "PR76", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_agachamento_sumo.jpg" },
  { id: 138, nome: "Panturrilha Sentada", codigo: "PR77", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_panturrilha_sentada.jpg" },
  { id: 139, nome: "Glúteo", codigo: "PR78", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_gluteo.jpg" },
  { id: 140, nome: "Panturrilha em Pé", codigo: "PR79", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_panturrilha_em_pe.jpg" },
  { id: 141, nome: "Levantamento Terra Olímpico", codigo: "PR91", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_levantamento_terra_olimpico.jpg" },
  { id: 142, nome: "Agachamento Sissy", codigo: "PR92", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_agachamento_sissy.jpg" },
  { id: 143, nome: "Elevação Pélvica em Pé", codigo: "PR93", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_elevacao_pelvica_em_pe.jpg" },
  { id: 144, nome: "Gaiola Agachamento", codigo: "TTFW74", categoria: "Plate Load", foto: "assets/images/produtos/pro/pl_gaiola_agachamento.jpg" },

  // ── PRO · TITANIUM ───────────────────────────────────
  { id: 145, nome: "Supino Inclinado", codigo: "TTS12", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_supino_inclinado.jpg" },
  { id: 146, nome: "Supino Reto", codigo: "TTS13", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_supino_reto.jpg" },
  { id: 147, nome: "Deltoide", codigo: "TTS21", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_deltoide.jpg" },
  { id: 148, nome: "Peitoral Dorsal", codigo: "TTS22", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_peitoral_dorsal.jpg" },
  { id: 149, nome: "Desenvolvimento Ombro", codigo: "TTS23", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_desenvolvimento_ombro.jpg" },
  { id: 150, nome: "Puxador", codigo: "TTS30", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_puxador.jpg" },
  { id: 151, nome: "Remada Baixa", codigo: "TTS31", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_remada_baixa.jpg" },
  { id: 152, nome: "Remada", codigo: "TTS34", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_remada.jpg" },
  { id: 153, nome: "Scott Máquina", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_scott_maquina.jpg" },
  { id: 154, nome: "Tríceps Paralela", codigo: "TTS42", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_triceps_paralela.jpg" },
  { id: 155, nome: "Tríceps Testa", codigo: "TTS43", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_triceps_testa.jpg" },
  { id: 156, nome: "Tríceps", codigo: "TTS45", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_triceps.jpg" },
  { id: 157, nome: "Abdominal", codigo: "TTS51", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_abdominal.jpg" },
  { id: 158, nome: "Lombar", codigo: "TTS52", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_lombar.jpg" },
  { id: 159, nome: "Gráviton", codigo: "TTS60", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_graviton.jpg" },
  { id: 160, nome: "Leg Press Horizontal", codigo: "TTS70", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_leg_press_horizontal.jpg" },
  { id: 161, nome: "Cadeira Extensora", codigo: "TTS71", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_cadeira_extensora.jpg" },
  { id: 162, nome: "Cadeira Flexora", codigo: "TTS72", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_cadeira_flexora.jpg" },
  { id: 163, nome: "Mesa Flexora", codigo: "TTS73", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_mesa_flexora.jpg" },
  { id: 164, nome: "Cadeira Abdutora", codigo: "TTS74", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_cadeira_abdutora.jpg" },
  { id: 165, nome: "Cadeira Adutora", codigo: "TTS75", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_cadeira_adutora.jpg" },
  { id: 166, nome: "Apolete", codigo: "TTS76", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_apolete.jpg" },
  { id: 167, nome: "Glúteo", codigo: "TTS78", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_gluteo.jpg" },
  { id: 168, nome: "Bíceps", codigo: "TTS40", categoria: "Titanium", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/i/m/img_site_0008_tts40_-_b_ceps_-_linha_titanium_-_kikos_pro_-_sku_i000243_1_1.jpg" },
  { id: 169, nome: "Cross Over", codigo: "TTMS20", categoria: "Titanium", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/f/o/fotos_site_ttms20_-_cross_over_-_linha_station_-_kikos_pro_-_sku_i000234_1.jpg" },

  // ── PRO · STATION ────────────────────────────────────
  { id: 170, nome: "Banco Reto com Suporte", codigo: "TTFW13i", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_reto_com_suporte.jpg" },
  { id: 171, nome: "Banco Inclinado", codigo: "TTFW14i", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_inclinado.jpg" },
  { id: 172, nome: "Banco Declinado com Suporte", codigo: "TTFW15i", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_declinado.jpg" },
  { id: 173, nome: "Banco Desenvolvimento", codigo: "TTFW16", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_desenvolvimento.jpg" },
  { id: 174, nome: "Banco Bíceps", codigo: "TTFW40i", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_biceps.jpg" },
  { id: 175, nome: "Banco Lombar", codigo: "TTFW52", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_lombar.jpg" },
  { id: 176, nome: "Abdominal Vertical", codigo: "TTFW60", categoria: "Station", foto: "assets/images/produtos/pro/st_abdominal_vertical.jpg" },
  { id: 177, nome: "Agachamento Livre", codigo: "TTFW72", categoria: "Station", foto: "assets/images/produtos/pro/st_agachamento_livre.jpg" },
  { id: 178, nome: "Gaiola Agachamento", codigo: "TTFW73", categoria: "Station", foto: "assets/images/produtos/pro/st_gaiola_agachamento.jpg" },
  { id: 179, nome: "Gaiola Agachamento Completa", categoria: "Station", foto: "assets/images/produtos/pro/st_gaiola_agachamento_completa.jpg" },
  { id: 180, nome: "Banco 0-90°", codigo: "TTFW80i", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_0_90.jpg" },
  { id: 181, nome: "Banco Reto", codigo: "TTFW81i", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_reto.jpg" },
  { id: 182, nome: "Banco Declinado", codigo: "TTFW83", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_declinado2.jpg" },
  { id: 183, nome: "Banco 90°", codigo: "TTFW84", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_90.jpg" },
  { id: 184, nome: "Suporte Anilha", codigo: "TTFW94", categoria: "Station", foto: "assets/images/produtos/pro/st_suporte_anilha.jpg" },
  { id: 185, nome: "Suporte Barra", codigo: "TTFW96 / I000264", categoria: "Station", foto: "assets/images/produtos/pro/st_suporte_barra.jpg" },
  { id: 186, nome: "Cross Angular", codigo: "TTMS21", categoria: "Station", foto: "assets/images/produtos/pro/st_cross_angular.jpg" },
  { id: 187, nome: "Voador em Pé", codigo: "TTMS25", categoria: "Station", foto: "assets/images/produtos/pro/st_voador_em_pe.jpg" },
  { id: 188, nome: "Crucifixo Anilhado", codigo: "TTPL22", categoria: "Station", foto: "assets/images/produtos/pro/st_crucifixo_anilhado.jpg" },
  { id: 189, nome: "Remada Cavalinho", codigo: "TTPL31", categoria: "Station", foto: "assets/images/produtos/pro/st_remada_cavalinho.jpg" },
  { id: 190, nome: "Puxador Convergente", codigo: "TTPL33", categoria: "Station", foto: "assets/images/produtos/pro/st_puxador_convergente.jpg" },
  { id: 191, nome: "Banco Romano Turbo", codigo: "TTPL52", categoria: "Station", foto: "assets/images/produtos/pro/st_banco_romano_turbo.jpg" },
  { id: 192, nome: "Smith", codigo: "TTPL62", categoria: "Station", foto: "assets/images/produtos/pro/st_smith.jpg" },
  { id: 193, nome: "Leg Press 45°", codigo: "TTPL70", categoria: "Station", foto: "assets/images/produtos/pro/st_leg_press_45.jpg" },
  { id: 194, nome: "Leg Press 45° Duplo", codigo: "TTPL71", categoria: "Station", foto: "assets/images/produtos/pro/st_leg_press_45_duplo.jpg" },
  { id: 195, nome: "Leg Press 45° com Apoio de Cabeça", codigo: "TTPL72", categoria: "Station", foto: "assets/images/produtos/pro/st_leg_press_45_compacto.jpg" },
  { id: 196, nome: "Panturrilha", codigo: "TTPL77", categoria: "Station", foto: "assets/images/produtos/pro/st_panturrilha.jpg" },
  { id: 197, nome: "Hack Agachamento", codigo: "TTPL78", categoria: "Station", foto: "assets/images/produtos/pro/st_hack_agachamento.jpg" },
  { id: 198, nome: "Hack 45°", codigo: "TTPL79", categoria: "Station", foto: "assets/images/produtos/pro/st_hack_45.jpg" },
  { id: 199, nome: "Agachamento Pêndulo", codigo: "TTPL80", categoria: "Station", foto: "assets/images/produtos/pro/st_agachamento_pendulo.jpg" },
  { id: 200, nome: "Elevação Pélvica 3D", codigo: "TTPL90", categoria: "Station", foto: "assets/images/produtos/pro/st_elevacao_pelvica_3d.jpg" },
  { id: 201, nome: "Super Glúteo Anilhado", codigo: "TTPL91", categoria: "Station", foto: "assets/images/produtos/pro/st_super_gluteo_anilhado.jpg" },
  { id: 202, nome: "Hiperextensão Revertido", codigo: "TTPL93", categoria: "Station", foto: "assets/images/produtos/pro/st_hiperextensao_revertido.jpg" },
  { id: 203, nome: "Glúteo Máximo", codigo: "TTPL94", categoria: "Station", foto: "assets/images/produtos/pro/st_gluteo_maximo.jpg" },

  // ── PRO · ACESSÓRIOS ─────────────────────────────────
  { id: 204, nome: "Kettlebell Rubber", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_kettlebell_rubber.jpg", pesos: [2, 4, 6, 8, 10, 12, 16, 18, 20, 22, 24] },
  { id: 205, nome: "Dumbbell Rubber", codigo: "MD2104", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_dumbbell_rubber.jpg", pesos: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
  { id: 209, nome: "Torre de Halter Sextavado Emborrachado", codigo: "11CX", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_torre_halter_sextavado.jpg" },
  { id: 210, nome: "Banco Step Regulável", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_banco_step_regulavel.jpg" },
  { id: 211, nome: "Kit Puxadores Anatômicos com Suporte", codigo: "AB1510", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_kit_puxadores_anatomicos.jpg" },
  { id: 213, nome: "Halter Sextavado Rubber", codigo: "MD2102", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_halter_sextavado_rubber.jpg", pesos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 214, nome: "Step Aeróbico", codigo: "MD1712", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_step_aerobico.jpg" },
  { id: 215, nome: "Suporte para Halter 10 Pares", codigo: "MD6217", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_suporte_halter_10_pares.jpg" },
  { id: 219, nome: "Barra Reta Cromada com Presilha", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_cromada.jpg" },
  { id: 225, nome: "Corda com Contador Digital", codigo: "AB3017", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_corda_contador_digital.jpg" },
  { id: 226, nome: "Boneco Bob", codigo: "AB3933", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_boneco_bob.jpg" },
  { id: 227, nome: "Roda de Exercícios", codigo: "MD1485", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_roda_exercicios.jpg" },
  { id: 228, nome: "Roda de Exercícios Abdominais", codigo: "AB3438", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_roda_exercicios_abdominais.jpg" },
  { id: 230, nome: "Trampolim", codigo: "AB3656", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_trampolim.jpg" },
  { id: 231, nome: "Kit Piso de Proteção", codigo: "AB3611", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_kit_piso_protecao.jpg" },
  { id: 232, nome: "Step Light", codigo: "AB3502", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_step_light.jpg" },

  // ── DUAL (nova linha — fotos hotlinked direto do site oficial kikos.com.br) ──
  { id: 234, nome: "Puxador Pulley com Remada", codigo: "TTDS3031", categoria: "Dual", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/f/o/fotos_site_i001958_-_ttds3031_-_pulley_com_remada_-_linha_dual_-_kikos_pro_1.jpg" },
  { id: 235, nome: "Bíceps e Tríceps Press", codigo: "TTDS4042", categoria: "Dual", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/f/o/fotos_site_ttds4042_-_biceps_e_triceps_-_linha_dual_-_kikos_pro_-_sku_i001960_1.jpg" },
  { id: 236, nome: "Mult Press", codigo: "TTDS13", categoria: "Dual", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/f/o/fotos_site_ttds13_-_mult_press_-_linha_dual_-_sku_i001957_1.jpg" },
  { id: 237, nome: "Cadeira Adutora e Abdutora", codigo: "TTDS7475", categoria: "Dual", foto: "assets/images/produtos/pro/dual_cadeira_adutora_abdutora_ttds7475.jpg" },
  { id: 238, nome: "Cross com Smith", codigo: "TTMS22", categoria: "Dual", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/f/o/fotos_site_ttms22_-_cross_com_smith_-_linha_dual_001_2.jpg" },
  { id: 239, nome: "Cadeira Adutora e Abdutora", codigo: "T7475", categoria: "Titanium", foto: "assets/images/produtos/pro/tit_cadeira_adutora_abdutora_t7475.jpg" },

  // ── MONSTER GOAT (linha nova — sem foto ainda, produto não publicado no site) ──
  { id: 240, nome: "Peck Deck", codigo: "MG12", categoria: "Monster Goat", foto: "" },
  { id: 241, nome: "Supino Reto", codigo: "MG13", categoria: "Monster Goat", foto: "" },
  { id: 242, nome: "Crossover", codigo: "MG20", categoria: "Monster Goat", foto: "" },
  { id: 243, nome: "Deltoide", codigo: "MG21", categoria: "Monster Goat", foto: "" },
  { id: 244, nome: "Peitoral Dorsal", codigo: "MG22", categoria: "Monster Goat", foto: "" },
  { id: 245, nome: "Desenvolvimento de Ombros", codigo: "MG23", categoria: "Monster Goat", foto: "" },
  { id: 246, nome: "Pull Down", codigo: "MG30", categoria: "Monster Goat", foto: "" },
  { id: 247, nome: "Remada Baixa", codigo: "MG31", categoria: "Monster Goat", foto: "" },
  { id: 248, nome: "Puxada Alta", codigo: "MG33", categoria: "Monster Goat", foto: "" },
  { id: 249, nome: "Remada", codigo: "MG34", categoria: "Monster Goat", foto: "" },
  { id: 250, nome: "Bíceps", codigo: "MG40", categoria: "Monster Goat", foto: "" },
  { id: 251, nome: "Tríceps", codigo: "MG42", categoria: "Monster Goat", foto: "" },
  { id: 252, nome: "Abdominal", codigo: "MG51", categoria: "Monster Goat", foto: "" },
  { id: 253, nome: "Lombar", codigo: "MG52", categoria: "Monster Goat", foto: "" },
  { id: 254, nome: "Total Hip", codigo: "MG53", categoria: "Monster Goat", foto: "" },
  { id: 255, nome: "Gráviton", codigo: "MG60", categoria: "Monster Goat", foto: "" },
  { id: 256, nome: "Leg Horizontal", codigo: "MG70", categoria: "Monster Goat", foto: "" },
  { id: 257, nome: "Cadeira Extensora", codigo: "MG71", categoria: "Monster Goat", foto: "" },
  { id: 258, nome: "Cadeira Flexora", codigo: "MG72", categoria: "Monster Goat", foto: "" },
  { id: 259, nome: "Mesa Flexora", codigo: "MG73", categoria: "Monster Goat", foto: "" },
  { id: 260, nome: "Cadeira Abdutora", codigo: "MG74", categoria: "Monster Goat", foto: "" },
  { id: 261, nome: "Cadeira Adutora", codigo: "MG75", categoria: "Monster Goat", foto: "" },
  { id: 262, nome: "Panturrilha em Pé", codigo: "MG77", categoria: "Monster Goat", foto: "" },
  { id: 263, nome: "Glúteo", codigo: "MG78", categoria: "Monster Goat", foto: "" },

  // ── HAMMER FORCE PM (linha nova — sem foto ainda, produto não publicado no site) ──
  { id: 264, nome: "Bíceps", codigo: "PM 2037", categoria: "Hammer Force PM", foto: "" },
  { id: 265, nome: "Supino Reto", codigo: "PM 2038", categoria: "Hammer Force PM", foto: "" },
  { id: 266, nome: "Remada", codigo: "PM 2039", categoria: "Hammer Force PM", foto: "" },
  { id: 267, nome: "Supino Inclinado", codigo: "PM 2040", categoria: "Hammer Force PM", foto: "" },
  { id: 268, nome: "Desenvolvimento de Ombro", codigo: "PM 2041", categoria: "Hammer Force PM", foto: "" },
  { id: 269, nome: "Supino Declinado", codigo: "PM 2042", categoria: "Hammer Force PM", foto: "" },
  { id: 270, nome: "Tríceps", codigo: "PM 2043", categoria: "Hammer Force PM", foto: "" },
  { id: 271, nome: "Puxada Frontal Invertida", codigo: "PM 2044", categoria: "Hammer Force PM", foto: "" },
  { id: 272, nome: "Puxada Alta", codigo: "PM 2045", categoria: "Hammer Force PM", foto: "" },
  { id: 273, nome: "Abdominal", codigo: "PM 2046", categoria: "Hammer Force PM", foto: "" },
  { id: 274, nome: "Flexora em Pé Unilateral", codigo: "PM 2047", categoria: "Hammer Force PM", foto: "" },
  { id: 275, nome: "Cadeira Extensora", codigo: "PM 2048", categoria: "Hammer Force PM", foto: "" },

  // ── DUAL: item que faltava ──
  { id: 276, nome: "Cadeira Flexora e Extensora", codigo: "TTDS7172i", categoria: "Dual", foto: "assets/images/produtos/pro/dual_cadeira_flexora_extensora_ttds7172i.jpg" },

  // ── ESTEIRAS: produto novo com foto enviada pelo Victor ──
  { id: 281, nome: "Esteira T-KX8500C com Tela", codigo: "T-KX8500C", categoria: "Esteiras", foto: "assets/images/produtos/pro/esteira_t_kx8500c.jpg" },

  // ── 7 itens residenciais/complementares confirmados na planilha ──
  { id: 285, nome: "Bike Spinning Bolt F1", codigo: "F1", categoria: "Bikes", foto: "" },
  { id: 286, nome: "Bike Spinning F2i", codigo: "F2i", categoria: "Bikes", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/n/o/novas_fotos_-_site_001_spinning_f2i_3.jpg" },
  { id: 287, nome: "Bike Spinning F3i", codigo: "F3i", categoria: "Bikes", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/n/o/novas_fotos_-_site_001_spinning_f3i_3.jpg" },
  { id: 288, nome: "Bike Spinning F5i", codigo: "F5i", categoria: "Bikes", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/n/o/novas_fotos_-_site_001_spinning_f5i_3_2.jpg" },
  { id: 289, nome: "Bike Spinning F7i", codigo: "F7i", categoria: "Bikes", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/n/o/novas_fotos_-_site_001_spinning_f7i_3.jpg" },
  { id: 290, nome: "Bike Spinning F9", codigo: "F9", categoria: "Bikes", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/s/p/spinning_f9_0003_dsc_3996_1.jpg" },
  { id: 291, nome: "Elíptico KE4.4", codigo: "KE4.4", categoria: "Elípticos", foto: "assets/images/produtos/pro/ke4_4.jpg" },

  // ── BARRAS (com código e SKU confirmados na planilha) ──
  { id: 292, nome: "Protetor Acolchoado Para Barra", codigo: "AB7029", categoria: "Acessórios", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/i/m/image_898_1.jpg" },
  { id: 293, nome: "Barra de Porta", codigo: "AB3421", categoria: "Acessórios", foto: "https://www.kikos.com.br/media/catalog/product/cache/25521d4458ddce7b0e29b7c6f134a0e2/i/m/image_1434_1_1322_1.jpg" },
  { id: 294, nome: "Barra de Porta Completa", codigo: "I000297", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_de_porta_completa.jpg" },
  { id: 295, nome: "Barra Reta 40cm Cromada com Presilha", codigo: "IR94020", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_40cm_50cm.jpg" },
  { id: 296, nome: "Barra W 1.20m Cromada com Presilha", codigo: "IR94006", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_w_120m.jpg" },
  { id: 297, nome: "Barra Reta 1.20m Cromada com Presilha", codigo: "IR94005", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_120m.jpg" },
  { id: 298, nome: "Barra Reta 1.70m Cromada com Presilha", codigo: "IR94003", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_170m.jpg" },
  { id: 299, nome: "Barra H Cromada com Presilha", codigo: "IR94009", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_h_120m.jpg" },
  { id: 300, nome: "Barra Reta 2.20m Cromada com Presilha", codigo: "IR94001", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_220m.jpg" },
  { id: 301, nome: "Barra Reta 0.50m Cromada", codigo: "I000407", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_40cm_50cm.jpg" },

  // ── BARRAS OLÍMPICAS ──
  { id: 302, nome: "Barra Reta 1.20m Cromada com Presilha Olímpica", codigo: "OB47S", categoria: "Acessórios", foto: "" },
  { id: 303, nome: "Barra W 1.20m Cromada com Presilha Olímpica", codigo: "OB47", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_w_120m_olimpica.jpg" },
  { id: 304, nome: "Barra Reta 1.52m Cromada com Presilha Olímpica", codigo: "OB60", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_152m_olimpica.jpg" },
  { id: 305, nome: "Barra H Cromada com Presilha Olímpica", codigo: "OB34", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_h_olimpica.jpg" },
  { id: 306, nome: "Barra Reta 2.20m Cromada com Presilha Olímpica", codigo: "OB86", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_reta_220m_olimpica.jpg" },
  { id: 307, nome: "Suporte para Barras Olímpicas", codigo: "i001716", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_suporte_barras_olimpicas.jpg" },
  { id: 308, nome: "Barra Hexagonal (Trap Bar)", codigo: "MD4111", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_hexagonal_trap_bar.jpg" },

  // ── ANILHAS ──
  { id: 311, nome: "Anilha Emborrachada", codigo: "2000842", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_anilha_emborrachada.jpg" },
  { id: 312, nome: "Anilha Rubber Vermelha", codigo: "MD1032", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_anilha_rubber_vermelha.jpg", pesos: [2.5, 5, 10, 15, 20] },
  { id: 315, nome: "Estante para Anilhas", codigo: "IR96013", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_estante_anilhas.jpg" },

  // ── COLCHONETES ──
  { id: 316, nome: "Colchonete Emborrachado Pequeno", codigo: "I000884", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_colchonete_pequeno.jpg" },
  { id: 317, nome: "Colchonete Emborrachado Grande", codigo: "I000883", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_colchonete_grande.jpg" },

  // ── BARRAS MONTADAS (peso fixo/soldado nas pontas, com seletor de peso) ──
  { id: 319, nome: "Barra Montada Reta Rubber", codigo: "244461", categoria: "Acessórios", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/0/5/05c5b9a6-be29-4796-9d17-f78133fadc3c_1_1.jpg", pesos: [10, 15, 20, 25, 30, 35, 40, 45, 50] },
  { id: 320, nome: "Barra Montada W Rubber", codigo: "233351", categoria: "Acessórios", foto: "https://www.kikos.com.br/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/6/f/6fc66f47-bde6-47f1-9af2-ec92f866b993.jpg", pesos: [10, 15, 20, 25, 30, 35, 40, 45, 50] },

  { id: 323, nome: "Bike Spinning Kikos S1200 Roda de Inércia 13Kg", codigo: "I027328", categoria: "Bikes", foto: "assets/images/produtos/pro/bike_spinning_s1200.jpg" },

  // ── NOVOS (linha Kikos Pro / Showroom, confirmados nesta consolidação) ──
  { id: 324, nome: "Dumbbell Rubber Vermelho Kikos Pro", codigo: "256820", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_dumbbell_rubber_vermelho_kikos_pro.jpg", pesos: [12, 14, 18] },
  { id: 325, nome: "Barra Montada Reta Pu Lightning Bolt Showroom", codigo: "250028S", categoria: "Acessórios", foto: "assets/images/produtos/pro/ac_barra_montada_reta_pu_lightning_bolt.jpg", pesos: [40, 60] },

];
