"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.ModLanguage = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Info_1 = require("../../../Core/Common/Info"),
  Log_1 = require("../../../Core/Common/Log"),
  ModManager_1 = require("../ModManager"),
  LanguageSystem_1 = require("../../../Core/Common/LanguageSystem");


class ModLanguage {
  static GetCurrLang() {
    switch(ModManager_1.ModManager.Settings.Language) {
      case "English":
        return "en";
      case "简体中文":
        return "chs";
      case "日本語":
        return "ja";
      case "Español":
        return "es";
      case "Indonesia":
        return "id";
      case "Vietnamese":
        return "vi";
      default:
        return "en";
    }
  }

  static Langs = ["English", "简体中文", "日本語", "Español", "Indonesia", "Vietnamese"];

  static translate = [
    {
      Text: "CUSTOM_TP_INS",
      en:  "CustomTp[Ins]",
      chs: "自定义传送[Ins]",
      ja: "てきとうな瞬間移動[Ins]",
      es: "Teleportación Personalizada[Ins]",
      id: "TpKustom[Ins]",
      vi: "DịchChuyểnTùyChỉnh[Ins]",
    },

    {
      Text: "COLOR_ON",
      en:  " : <color=green>ON</color> |",
      chs: " : <color=green>开启</color> |",
      ja: " : <color=green>オン</color>",
      es: " : <color=green>ACTIVO</color> |",
      id: " : <color=green>ON</color> |",
      vi: " : <color=green>BẬT</color> |",
    },
    {
      Text: "COLOR_OFF",
      en:  " : <color=red>OFF</color> |",
      chs: " : <color=red>关闭</color> |",
      ja: "<color=red>オフ</color>",
      es: " : <color=red>DESACTIVADO</color> |",
      id: " : <color=red>OFF</color> |",
      vi: " : <color=red>TẮT</color> |",
    },
    {
      Text: "TEXT_ON",
      en:  "ON",
      chs: "开启",
      ja: "オン",
      es: "ACTIVO",
      id: "ON",
      vi: "Bật",
    },
    {
      Text: "TEXT_OFF",
      en:  "OFF",
      chs: "关闭",
      ja: "オフ",
      es: "DESACTIVADO",
      id: "OFF",
      vi: "TẮT",
    },
    {
      Text: "TEXT_GOD_MODE",
      en:  "God Mode [F5]",
      chs: "无敌模式[F5]",
      ja: "神モードやで[F5]",
      es: "Modo Dios[F5]",
      id: "ModeDewa[F5]",
      vi: "Bất Tử [F5]",
    },
    {
      Text: "TEXT_HIT_MULTIPLIER",
      en:  "Hit Multiplier [F6]",
      chs: "多倍攻击[F6]",
      ja: "ヒット倍率[F6]",
      es: "Golpe Multiplicador[F6]",
      id: "PengaliHit[F6]",
      vi: "Số Lượng Đòn Đánh [F6]",
    },
    {
      Text: "TEXT_AUTO_PICK_TREASURE",
      en:  "Auto Pick Treasure [F7]",
      chs: "拾取宝箱[F7]",
      ja: "自動で宝を拾うんや[F7]",
      es: "Auto Recoger Tesoro[F7]",
      id: "AmbilHartaOtomatis[F7]",
      vi: "Tự Động Nhặt Phần Thưởng[F7]",
    },
    {
      Text: "TEXT_AUTO_ABSORB",
      en:  "Auto Absorb [F8]",
      chs: "自动吸收[F8]",
      ja: "自動で吸収すんや[F8]",
      es: "Auto Absorber[F8]",
      id: "SerapOtomatis[F8]",
      vi: "Tự Động Hấp Thụ Echo[F8]",
    },
    {
      Text: "TEXT_KILL_AURA",
      en:  "Kill Aura [F9]",
      chs: "杀戮光环[F9]",
      ja: "キルオーラやで[F9]",
      es: "Aura Asesina[F9]",
      id: "Aura Membunuh [F9]",
      vi: "Tàn Sát [F9]",
    },
    {
      Text: "TEXT_PERCEPTION_RANGE",
      en:  "Perception Range [F10]",
      chs: "感知范围[F10]",
      ja: "感知範囲やで[F10]",
      es: "Rango de Percepción[F10]",
      id: "Jarak Penglihatan [F10]",
      vi: "Tương Tác Từ Xa [F10]",
    },
    {
      Text: "TEXT_NO_COOLDOWN",
      en:  "No Cooldown [F11]",
      chs: "无冷却[F11]",
      ja: "クールダウンなしやで[F11]",
      es: "Sin Enfriamiento[F11]",
      id: "Tanpa Cooldown [F11]",
      vi: "Không Thời Gian Hồi Chiêu [F11]",
    },
    {
      Text: "TEXT_PLAYER_SPEED",
      en:  "Player Speed [F12]",
      chs: "玩家速度[F12]",
      ja: "プレイヤーのスピードやで[F12]",
      es: "Velocidad del Jugador[F12]",
      id: "Kecepatan Pemain [F12]",
      vi: "Tốc độ nhân vật [F12]",
    },
    {
      Text: "TEXT_CUSTOM_TP",
      en:  "Custom Teleport [INS]",
      chs: "自定义传送[INS]",
      ja: "てきとうな瞬間移動[INS]",
      es: "Teleportación Personalizada[INS]",
      id: "Teleportasi Kustom [INS]",
      vi: "Dịch Chuyển Tùy Chỉnh [INS]",
    },
    {
      Text: "TEXT_AUTO_LOOT",
      en:  "Auto Loot [Num0]",
      chs: "自动拾取[Num0]",
      ja: "自動あっぷる[Num0]",
      es: "Auto Botín[Num0]",
      id: "Loot Otomatis [Num0]",
      vi: "Tự Động Nhặt [Num0]",
    },
    {
      Text: "TEXT_CUSTOM_TP_STATE",
      en:  "Custom Teleport State [Insert]:",
      chs: "自定义传送状态[Insert]:",
      ja: "カスタムテレポートの状態[Insert]",
      es: "Estado de Teleportación Personalizada [Insert]:",
      id: "Status Teleportasi Kustom [Insert]:",
      vi: "Trạng thái dịch chuyển [Insert]:",
    },
    {
      Text: "TEXT_SHOW_DEL",
      en:  " Show [Del]",
      chs: " 显示[Del]",
      ja: " ショー[Del]",
      es: " Mostrar [Del]",
      id: "Tampilkan [Del]",
      vi: " Hiện [Del]",
    },
    {
      Text: "TEXT_CURR_FILE",
      en:  "Current File:",
      chs: "当前文件:",
      ja: "今のファイル",
      es: "Archivo Actual:",
      id: "File Saat Ini:",
      vi: "File Hiện Tại:",
    },
    {
      Text: "TEXT_PREV_FILE",
      en:  "| PreviousFile[PageUp]:",
      chs: "| 上一个文件[PageUp]:",
      ja: "| 前のファイル[PageUp]",
      es: "| Archivo Anterior[PageUp]:",
      id: "| File Sebelumnya[PageUp]:",
      vi: "| FileTrước[PageUp]:",
    },
    {
      Text: "TEXT_NEXT_FILE",
      en:  " | NextFile[PageDown]:",
      chs: " | 下一个文件[PageDown]:",
      ja: " | つぎのファイル[PageDown]",
      es: " | Archivo Siguiente[PageDown]:",
      id: " | File Berikutnya[PageDown]:",
      vi: " | FileKế[PageDown]:",
    },
    {
      Text: "TEXT_PREV_POS",
      en:  " | PreviousPos[Up]:",
      chs: " | 上一个位置[Up]:",
      ja: " |前のポジション[Up]",
      es: " | Posición Anterior[Up]:",
      id: " | Posisi Sebelumnya[Up]:",
      vi: " | VịTríTrước[Up]:",
    },
    {
      Text: "TEXT_NEXT_POS",
      en:  " | NextPos[Down]:",
      chs: " | 下一个位置[Down]:",
      ja: " |つぎのポジション[Down]",
      es: " | Posición Siguiente[Down]:",
      id: " | Posisi Berikutnya[Down]:",
      vi: " | VịTríKế[Down]:",
    },
    {
      Text: "TEXT_ANTI_DITHER",
      en:  "Anti Dither",
      chs: "反虚化",
      ja: "アンチディザ",
      es: "Anti Dither",
      id: "Anti Dither",
      vi: "Chống làm mờ nhân vật",
    },
    {
      Text: "TEXT_SET_DELAY_LEFT",
      en:  " | SetDelay[Left]: ",
      chs: " | 延迟[Left]: ",
      ja: " | SetDelay[Left]: ",
      es: " | Establecer Retraso[Izquierda]: ",
      id: " | AturJeda[Kiri]: ",
      vi: " | ĐặtĐộTrễ[Left]: ",
    },
    {
      Text: "TEXT_SELECT_RIGHT",
      en:  " | Select[Right]: ",
      chs: " | 选择pos[Right]: ",
      ja: " | Select[Right]: ",
      es: " | Seleccionar[Derecha]: ",
      id: " | Pilih[Right]: ",
      vi: " | Chọn[Right]: ",
    },
    {
      Text: "TEXT_IS_LAST_FILE",
      en:  "is the last file",
      chs: "这是最后一个文件",
      ja: "is the last file",
      es: "es el último archivo",
      id: "adalah file terakhir",
      vi: "là file cuối cùng",
    },
    {
      Text: "TEXT_IS_FIRST_FILE",
      en:  "is the first file",
      chs: "这是第一个文件",
      ja: "is the first file",
      es: "es el primer archivo",
      id: "adalah file pertama",
      vi: "là file đầu tiên",
    },
    {
      Text: "TEXT_IS_LAST_POS",
      en:  "is the last pos",
      chs: "这是最后一个点位",
      ja: "is the last pos",
      es: "es la última posición",
      id: "adalah pos terakhir",
      vi: "là vị trí cuối cùng",
    },
    {
      Text: "TEXT_IS_FIRST_POS",
      en:  "is the first pos",
      chs: "这是第一个点位",
      ja: "is the first pos",
      es: "es la primera posición",
      id: "adalah pos pertama",
      vi: "là vị trí đầu tiên",
    },
    {
      Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
      en:  "CustomTp:AutoMode:Set Delay",
      chs: "自定义传送:自动模式:设置延迟",
      ja: "CustomTp:オートモード:遅延を設定",
      es: "CustomTp:AutoMode:Establecer Retraso",
      id: "KustomTp:ModeOtomatis:Set Jeda",
      vi: "DịchChuyểnTùyChỉnh:TựĐộng:Đặt độ trễ",
    },
    {
      Text: "TEXT_ENTER_DELAY",
      en:  "Please enter Delay(s)",
      chs: "请输入延迟(秒)",
      ja: "Please enter Delay(s)",
      es: "Por favor, introduzca el retraso(s)",
      id: "Silakan masukkan Jeda(detik)",
      vi: "Hãy nhập độ trễ(s)",
    },
    {
      Text: "TEXT_SECONDS",
      en:  "seconds",
      chs: "秒",
      ja: "seconds",
      es: "segundos",
      id: "detik",
      vi: "giây",
    },
    {
      Text: "TEXT_GO",
      en:  "Go",
      chs: "出发",
      ja: "Go",
      es: "Ir",
      id: "Pergi",
      vi: "Đi",
    },
    {
      Text: "TEXT_AUTO_MODE",
      en:  "AutoMode",
      chs: "自动模式",
      ja: "オートモード",
      es: "Modo Automático",
      id: "ModeOtomatis",
      vi: "TựĐộng",
    },
    {
      Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
      en:  "CustomTp:CurrPos:Select",
      chs: "自定义传送:当前序号:选择",
      ja: "CustomTp:現在の位置:選択",
      es: "CustomTp:Posición Actual:Seleccionar",
      id: "KustomTp:PosSaatIni:Pilih",
      vi: "DịchChuyểnTùyChỉnh:VịTríHiệnTại:Chọn",
    },
    {
      Text: "TEXT_ENTER_CURR_NUM",
      en:  "Please enter CurreNum",
      chs: "请输入当前序号",
      ja: "現在の番号を入力してください",
      es: "Por favor, introduzca el número actual",
      id: "Silakan masukkan NomorSaatIni",
      vi: "Xin vui lòng nhập vị tri",
    },
    {
      Text: "TEXT_AUTO_MODE_END",
      en:  " | AutoMode[End]: ",
      chs: " | 自动模式[End]: ",
      ja: " | オートモード[End]: ",
      es: " | Modo Automático[End]: ",
      id: " | ModeOtomatis[Akhir]: ",
      vi: " | TựĐộng[End]: ",
    },
    {
      Text: "TEXT_INFINITE_STAMINA",
      en:  "Infinite Stamina",
      chs: "无限体力",
      ja: "無限のスタミナ",
      es: "Estamina Infinita",
      id: "Stamina Tak Terbatas",
      vi: "Vô hạn năng lượng",
    },
    {
      Text: "TEXT_CUSTOM_UID",
      en:  "Custom UID",
      chs: "自定义UID",
      ja: "カスタムUID",
      es: "UID Personalizado",
      id: "UID Kustom",
      vi: "UID Tùy Chỉnh",
    },
    {
      Text: "HEADING_PLAYER",
      en:  "Player",
      chs: "玩家",
      ja: "プレーヤー",
      es: "Jugador",
      id: "Pemain",
      vi: "Người chơi",
    },
    {
      Text: "HEADING_WORLD",
      en:  "World",
      chs: "世界",
      ja: "世界",
      es: "Mundo",
      id: "Dunia",
      vi: "Thế giới",
    },
    {
      Text: "HEADING_VISUAL",
      en:  "Visual",
      chs: "视觉",
      ja: "ビジュアル",
      es: "Visual",
      id: "Visual",
      vi: "Thị giác",
    },
    {
      Text: "TEXT_HIDE_HUD",
      en:  "Hide HUD",
      chs: "隐藏HUD",
      ja: "HUDを非表示",
      es: "Ocultar Interfaz",
      id: "Sembunyikan HUD",
      vi: "Ẩn HUB",
    },
    {
      Text: "TEXT_HIDE_DAMAGE_TEXT",
      en:  "Hide Damage Text",
      chs: "隐藏伤害文字",
      ja: "ダメージテキストを非表示",
      es: "Ocultar Texto de Daño",
      id: "Sembunyikan Teks Kerusakan",
      vi: "Không hiện sát thương",
    },
    {
      Text: "TEXT_MARK_TELEPORT",
      en:  "Mark Teleport [T]",
      chs: "标记传送[T]",
      ja: "マークテレポート[T]",
      es: "Marcar teletransporte",
      id: "Tandai Teleport [T]",
      vi: "Đánh dấu để dịch chuyển [T]",
    },
    {
      Text: "TEXT_ONLY_HATE",
      en:  "Only Hatred",
      chs: "只有仇恨",
      ja: "憎しみだけ",
      es: "Solo Odio",
      id: "Hanya Kebencian",
      vi: "Chỉ xung quanh",
    },
    {
      Text: "TEXT_INFINITY",
      en:  "Infinity",
      chs: "无限",
      ja: "無限",
      es: "Infinito",
      id: "Tak Terbatas",
      vi: "Vô hạn",
    },
    {
      Text: "HEADING_TELEPORT",
      en:  "Teleport",
      chs: "传送",
      ja: "テレポート",
      es: "Teletransporte",
      id: "Teleport",
      vi: "Dịch chuyển",
    },
    {
      Text: "HEADING_DEBUG",
      en:  "Debug",
      chs: "调试",
      ja: "デバッグ",
      es: "Depurar",
      id: "Debug",
      vi: "Gỡ lỗi",
    },
    {
      Text: "TEXT_DEBUG_ENTITY",
      en:  "Debug Entity",
      chs: "调试实体",
      ja: "デバッグエンティティ",
      es: "Depurar Entidad",
      id: "Entitas Debug",
      vi: "Gỡ lỗi Entity",
    },
    {
      Text: "TEXT_AUTO_DESTROY",
      en:  "Auto Destroy",
      chs: "自动销毁",
      ja: "自動破壊",
      es: "Auto Destruir",
      id: "Hancurkan Otomatis",
      vi: "Tự động phá hủy",
    },

    {
      Text: "TEXT_DISCLAIMER",
      en:  "This hack is completely free, if you paid to get this, you have been scammed.",
      chs: "此黑客程序完全免费，如果您付费获得此程序，则您被骗了。",
      ja: "このハックは完全に無料です。これを入手するためにお金を払った場合は、詐欺に遭ったことになります。",
      es: "Este hack es completamente gratuito, si pagaste por obtenerlo, has sido estafado.",
      id: "Hack ini sepenuhnya gratis, jika Anda membayar untuk mendapatkan ini, Anda telah tertipu.",
      vi: "Bản hack này hoàn toàn miễn phí, nếu bạn đã mua nó từ ai, bạn đã bị lừa đảo.",
    },
    {
      Text: "TEXT_DESIGNER",
      en:  "GUI Designer: n0bu",
      chs: "GUI设计师： n0bu",
      ja: "GUI 作成者 n0bu",
      es: "Diseñador de GUI: n0bu",
      id: "Perancang GUI: n0bu",
      vi: "Thiết kế GUI: n0bu",
    },
    {
      Text: "TEXT_NEW_KILL_AURA",
      en:  "New Kill Aura",
      chs: "新杀戮光环",
      ja: "新しいキルオーラ",
      es: "Nueva Aura Asesina",
      id: "Aura Pembunuh Baru",
      vi: "Tàn Sát Phiên Bản Mới",
    },
    {
      Text: "TEXT_WORLD_SPEED",
      en:  "World Speed",
      chs: "世界速度",
      ja: "世界スピード",
      es: "Velocidad del Mundo",
      id: "Kecepatan Dunia",
      vi: "Tốc Độ Thế Giới",
    },
    {
      Text: "TEXT_KILL_ANIMAL",
      en:  "Kill Animal",
      chs: "杀死动物",
      ja: "動物を殺す",
    },
    {
      Text: "TEXT_SAVE_CONFIG",
      en:  "Save Config",
      chs: "保存配置",
      ja: "設定を保存",
    },
    {
      Text: "TEXT_AUTO_DESTROY",
      en:  "Auto Destroy [Num1]",
      chs: "自动销毁[Num1]",
      ja: "Auto Destroy [Num1]",
    },
    {
      Text: "TEXT_LANGUAGE",
      en:  "Language",
      chs: "语言",
      ja: "言語",
    },
    {
      Text: "TEXT_CONSOLE_COMMAND",
      en:  "Console Command",
      chs: "虚幻控制台命令",
      ja: "コンソールコマンド",
    },
    {
      Text: "TEXT_CONSOLE_COMMAND",
      en:  "Console Command",
      chs: "控制台命令",
      ja: "コンソールコマンド",
    },
    {
      Text: "TEXT_FOV",
      en:  "FOV",
      chs: "FOV",
      ja: "視野角",
    },
    {
      Text: "TEXT_SHOW_FPS",
      en:  "Show FPS",
      chs: "显示FPS",
      ja: "FPSを表示",
    },
    {
      Text: "TEXT_FPS_UNLOCKER",
      en:  "FPS Unlocker",
      chs: "FPS解锁",
      ja: "FPSアンロック",
    },
    {
      Text: "TEXT_SONANCE_CASKET",
      en:  "Sonance Casket",
      chs: "声匣",
      ja: "ソナンスカスケット",
    },
    {
      Text: "TEXT_PUZZLE",
      en:  "Puzzle",
      chs: "解谜",
      ja: "Puzzle",
    },
    {
      Text: "TEXT_ANIMAL",
      en:  "Animal",
      chs: "动物",
      ja: "動物",
    },
    {
      Text: "TEXT_TREASURE",
      en:  "Treasure",
      chs: "箱子",
      ja: "宝物",
    },
    {
      Text: "TEXT_COLLECTION",
      en:  "Collection",
      chs: "收集品",
      ja: "コレクション",
    },
    {
      Text: "TEXT_MONSTER",
      en:  "Monster",
      chs: "怪物",
      ja: "モンスター",
    },
    {
      Text: "TEXT_SHOW_BOX",
      en:  "Show Box",
      chs: "展示方框",
      ja: "表示ボックス",
    },
    {
      Text: "TEXT_SHOW_DISTANCE",
      en:  "Show Distance",
      chs: "显示距离",
      ja: "距離を表示します",
    },
    {
      Text: "TEXT_SHOW_NAME",
      en:  "Show Name",
      chs: "显示名称",
      ja: "ショー名",
    },
    {
      Text: "HEADING_ESP",
      en:  "ESP",
      chs: "透视",
      ja: "ESP",
    },
    {
      Text: "TEXT_WEATHER",
      en:  "Weather",
      chs: "天气",
      ja: "天気",
    },
    {
      Text: "TEXT_VACUUM_COLLECT",
      en:  "Vacuum Collect",
      chs: "吸收集品",
      ja: "Vacuum Collect",
    },
    {
      Text: "TEXT_MOB_VACUUM",
      en:  "Monster Vacuum",
      chs: "吸怪",
      ja: "Monster Vacuum",
    },
    {
      Text: "HEADING_FILTER",
      en:  "Filter",
      chs: "筛选",
      ja: "フィルター",
    },
    {
      Text: "TEXT_SUNNY",
      en:  "Sunny",
      chs: "晴天",
      ja: "晴れ",
    },
    {
      Text: "TEXT_CLOUDY",
      en:  "Cloudy",
      chs: "多云的",
      ja: "曇り",
    },
    {
      Text: "TEXT_THUNDER_RAIN",
      en:  "Thunder Rain",
      chs: "雷雨",
      ja: "雷雨",
    },
    {
      Text: "TEXT_SNOW",
      en:  "Snow",
      chs: "雪",
      ja: "雪",
    },
    {
      Text: "TEXT_RAIN",
      en:  "Rain",
      chs: "雨",
      ja: "雨",
    },
  ];

  static ModTr = (string) => {
    const Find = ModLanguage.translate.find(translate => translate.Text == string);
    if (Find) {
      return Find[this.GetCurrLang()] || Find.Text;
    } else {
      return string; // return original string if no translation found
    }
  };
}

exports.ModLanguage = ModLanguage;
