// ��������� ��������� �������� �������

Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");

BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");

BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");

Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");

Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");

Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");

Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");



// ������ ��������� ������ ��� �����

BreackGraph.BreackAll = true;

// ���������� ���������� ������

Ui.GetContext().QuadsCount.Value = true;

// ��� ������������ �����

Build.GetContext().Pipette.Value = true;

Build.GetContext().BalkLenChange.Value = true;

Build.GetContext().SetSkyEnable.Value = true;

Build.GetContext().GenMapEnable.Value = true;

Build.GetContext().ChangeCameraPointsEnable.Value = true;

Build.GetContext().QuadChangeEnable.Value = true;

Build.GetContext().BuildModeEnable.Value = false;

Build.GetContext().CollapseChangeEnable.Value = true;

Build.GetContext().RenameMapEnable.Value = true;

Build.GetContext().ChangeMapAuthorsEnable.Value = true;

Build.GetContext().LoadMapEnable.Value = true;

Build.GetContext().ChangeSpawnsEnable.Value = true;



// ��������� ����

Properties.GetContext().GameModeName.Value = "GameModes/Peace";

// ������� �������

Teams.Add("Blue", "ツ<size=30><color=#FF0000>Игроки</color></size>", { b: 45 });

Teams.Add("Green", "☬<color=yellow>Игроки</a>︻╦̵̵͇̿̿̿̿╤──", { g: 23 });

var blueTeam = Teams.Get("Blue");

var greenTeam = Teams.Get("Green");

blueTeam.Spawns.SpawnPointsGroups.Add(1);

greenTeam.Spawns.SpawnPointsGroups.Add(2);

blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;

greenTeam.Build.BlocksSet.Value = BuildBlocksSet.Green;

Teams.Add("Red", "♨<color=blue>КОСТЯЯЯ</a>♨", { r: 1 });

var redTeam = Teams.Get("Red");

redTeam.Spawns.SpawnPointsGroups.Add(3);

redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red;





// ��������� ���� � ������� �� �������

Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

Players.Get("A3D71149B6BFB9F9").Build.Pipette.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.FloodFill.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.FillQuad.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.RemoveQuad.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BalkLenChange.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.FlyEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.SetSkyEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.GenMapEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.ChangeCameraPointsEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.QuadChangeEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BuildModeEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.CollapseChangeEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.RenameMapEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.ChangeMapAuthorsEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.LoadMapEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.ChangeSpawnsEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BuildRangeEnable.Value = true;



Players.Get("A3D71149B6BFB9F9").Damage.DamageIn.Value = false;



Players.Get("A3D71149B6BFB9F9").Build.FlyEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BuildRangeEnable.Value = true;



//

Players.Get("A3D71149B6BFB9F9").contextedProperties.SkinType.Value = 1;





Players.Get("A3D71149B6BFB9F9").inventory.Main.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.MainInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Secondary.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.SecondaryInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Melee.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Explosive.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.ExplosiveInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Build.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.BuildInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BlocksSet.Value = BuildBlocksSet.AllClear;



Players.Get("A3D71149B6BFB9F9").Damage.FriendlyFire.Value = true;



Players.Get("A3D71149B6BFB9F9").Properties.Spawns.Value = legend;



Properties.GetContext().Spawns.Value = player;



// ������ ���������

Ui.GetContext().Hint.Value = " привет  " + player + player.id

});



des = "ᵗⁱᵏᵗᵒᵏ<color=yellow>Режим</a>×͜×";

sed = "亗<color=lime>Игроки</a>︻╦デ╤━╼";

Teams.Get("Green").Properties.Get("Des").Value = des;

Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "sed" };

Teams.Get("Blue").Properties.Get("sed").Value = sed;

Ui.GetContext().TeamProp2.Value = { Team: "Green", Prop: "Des" };





Damage.OnKill.Add(function(player, killed) {

	if (killed.Team != null && killed.Team != player.Team) {

		++player.Properties.Kills.Value;

		player.Properties.Scores.Value += 1;

player.Ui.Hint.Value = player + "убил игрока";

Players.Get("A3D71149B6BFB9F9").Properties.Scores.Value += 100000;

	}

})



Damage.OnDeath.Add(function(player, death) {

	if (death.Team != null && death.Team != player.Team) {

		++player.Properties.Deaths.Value;

		player.Properties.Scores.Value += 10;

player.Ui.Hint.Value = player + "умер";

Players.Get("A3D71149B6BFB9F9").Properties.Scores.Value += 100000;

	}

})





var maxDeaths = Players.MaxCount * 6;

Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;

Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;

// задаем что выводить в лидербордах

LeaderBoard.PlayerLeaderBoardValues = [

	{

		Value: "Kills",

		DisplayName: "<color=orange>kill</a>",

		ShortDisplayName: "<color=orange>kill</a>"

	},

	{

		Value: "Deaths",

		DisplayName: "<color=pink>death</a>",

		ShortDisplayName: "<color=pink>death</a>"

	},

	{

		Value: "Spawns",

		DisplayName: "спавн",

		ShortDisplayName: "спавн"

	},

	{



		Value: "Scores",

		DisplayName: "<color=yellow>scores</a>",

		ShortDisplayName: "<color=yellow>scores</a>"

	}

 

];

LeaderBoard.TeamLeaderBoardValue = {

	Value: "Deaths",

	DisplayName: "<color=pink>death</a>",

	ShortDisplayName: "<color=pink>death</a>"

};

// вес команды в лидерборде

LeaderBoard.TeamWeightGetter.Set(function(team) {

	return team.Properties.Get("Deaths").Value;

});









// ����� �� ����� � �������

Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()





Players.Get("A3D71149B6BFB9F9").Build.Pipette.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.FloodFill.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.FillQuad.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.RemoveQuad.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BalkLenChange.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.FlyEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.SetSkyEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.GenMapEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.ChangeCameraPointsEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.QuadChangeEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BuildModeEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.CollapseChangeEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.RenameMapEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.ChangeMapAuthorsEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.LoadMapEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.ChangeSpawnsEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BuildRangeEnable.Value = true;



Players.Get("A3D71149B6BFB9F9").Damage.DamageIn.Value = false;



Players.Get("A3D71149B6BFB9F9").Build.FlyEnable.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BuildRangeEnable.Value = true;





Players.Get("A3D71149B6BFB9F9").inventory.Main.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.MainInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Secondary.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.SecondaryInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Melee.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Explosive.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.ExplosiveInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Build.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.BuildInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BlocksSet.Value = BuildBlocksSet.AllClear;







});



var pTrigger = AreaPlayerTriggerService.Get("pTrigger");

pTrigger.Tags = ["pTrigger"];

pTrigger.Enable = true;

pTrigger.OnEnter.Add(function (player, area) {

player.Ui.Hint.Value = "ПРИВЕТ♨♨";

});





var hTrigger = AreaPlayerTriggerService.Get("hTrigger");

hTrigger.Tags = ["hTrigger"];

hTrigger.Enable = true;

hTrigger.OnEnter.Add(function (player, area) {

player.Properties.Scores.Value += 1000;



player.Ui.Hint.Value = "Ти получаеш коины";

});





var mTrigger = AreaPlayerTriggerService.Get("mTrigger");

mTrigger.Tags = ["mTrigger"];

mTrigger.Enable = true;

mTrigger.OnEnter.Add(function (player, area) {

player.Ui.Hint.Value =  "твой айди " + id.player;

});





var bTrigger = AreaPlayerTriggerService.Get("bTrigger");

bTrigger.Tags = ["bTrigger"];

bTrigger.Enable = true;

bTrigger.OnEnter.Add(function (player, area) {

player.Ui.Hint.Value = player + ":твое имя";

});





var xTrigger = AreaPlayerTriggerService.Get("xTrigger");

xTrigger.Tags = ["xTrigger"];

xTrigger.Enable = true;

xTrigger.OnEnter.Add(function (player, area) {

player.Properties.Scores.Value -= 1000;

player.inventory.Melee.Value = true;

player.Ui.Hint.Value = "получена лопата";

});





var admin = AreaPlayerTriggerService.Get("admin");

admin.Tags = ["admin"];

admin.Enable = true;

admin.OnEnter.Add(function (player, area) {

player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true;

player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;



player.inventory.Melee.Value = true;

player.inventory.Explosive.Value = true;



player.inventory.Build.Value = true;

player.inventory.BuildInfinity.Value = true;

player.inventory.BlocksSet.Value = BuildBlocksSet.AllClear;

player.Build.FlyEnable.Value = true;

player.Build.BuildRangeEnable.Value = true;

player.Ui.Hint.Value = player + "получил админку";

});





var lTrigger = AreaPlayerTriggerService.Get("lTrigger");

lTrigger.Tags = ["lTrigger"];

lTrigger.Enable = true;

lTrigger.OnEnter.Add(function (player, area) {

player.Properties.Scores.Value -= 1000;

player.inventory.Secondary.Value = true;

player.Ui.Hint.Value = "ти получил пестолет";

});





var oTrigger = AreaPlayerTriggerService.Get("oTrigger");

oTrigger.Tags = ["oTrigger"];

oTrigger.Enable = true;

oTrigger.OnEnter.Add(function (player, area) {

player.Properties.Scores.Value -= 1000;

player.inventory.Build.Value = true;

player.inventory.BlocksSet.Value = BuildBlocksSet.Blue;

player.Ui.Hint.Value = "Получены блоки";

});





var мой = AreaPlayerTriggerService.Get("мой");

мой.Tags = ["мой"];

мой.Enable = true;

мой.OnEnter.Add(function (player, area) {

player.Ui.Hint.Value = "data-22 Juni 2023 year";

});





var ти = AreaPlayerTriggerService.Get("ти");

ти.Tags = ["ти"];

ти.Enable = true;

ти.OnEnter.Add(function (player, area) {

player.inventory.Melee.Value = false;

player.Ui.Hint.Value = "убрана лопата";

});



var ха = AreaPlayerTriggerService.Get("ха");

ха.Tags = ["ха"];

ха.Enable = true;

ха.OnEnter.Add(function (player, area) {

player.Properties.Spawns.Value += 100000;

player.Ui.Hint.Value = "+ 100000 спавнов";

});





var лол = AreaPlayerTriggerService.Get("лол");

лол.Tags = ["лол"];

лол.Enable = true;

лол.OnEnter.Add(function (player, area) {

player.Ui.Hint.Value = "ти получил блоки :)";

player.Properties.immortality.Value = false;

Spawns.GetContext().enable = true;

gTrigger.Enable = true;

player.inventory.Build.Value = true;

player.inventory.BuildInfinity.Value = true;

player.inventory.Build.BlocksSet.Value = BuildBlocksSet.Blue;

gTrigger.Enable = true;

});





var топ = AreaPlayerTriggerService.Get("топ");

топ.Tags = ["топ"];

топ.Enable = true;

топ.OnEnter.Add(function (player, area) {

player.Properties.Scores.Value += 100;

player.Ui.Hint.Value = "Ти получаеш 100 коинов";

});





var uTrigger = AreaPlayerTriggerService.Get("uTrigger");

uTrigger.Tags = ["uTrigger"];

uTrigger.Enable = true;

uTrigger.OnEnter.Add(function (player, area) {



player.Ui.Hint.Value = "0%"

sleep(300)

player.Ui.Hint.Value = "20%"

sleep(300)

player.Ui.Hint.Value = "40%"

sleep(300)

player.Ui.Hint.Value = "60%"

sleep(300)

player.Ui.Hint.Value = "80%"

sleep(300)

player.Ui.Hint.Value = "100%";

});





var ш = AreaPlayerTriggerService.Get("ш");

ш.Tags = ["ш"];

ш.Enable = true;

ш.OnEnter.Add(function (player, area) {



player.inventory.Main.Value = false;

player.inventory.MainInfinity.Value = false;

player.inventory.Secondary.Value = false;

player.inventory.SecondaryInfinity.Value = false;

player.inventory.Melee.Value = false;

player.inventory.Explosive.Value = false;

player.inventory.ExplosiveInfinity.Value = false;

player.inventory.Build.Value = false;

player.inventory.BuildInfinity.Value = false;



Players.Get("A3D71149B6BFB9F9").inventory.Main.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.MainInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Secondary.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.SecondaryInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Melee.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Explosive.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.ExplosiveInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Build.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.BuildInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BlocksSet.Value = BuildBlocksSet.AllClear;







player.Ui.Hint.Value = "у тебя будет пустой инвентарь, кроме ♨<color=blue>КОСТЯЯЯ</a>♨";



});



var skin = AreaPlayerTriggerService.Get("skin");

skin.Tags = ["skin"];

skin.Enable = true;

skin.OnEnter.Add(function (player, area) {

//

player.contextedProperties.SkinType.Value = 2;

});



var hp = AreaPlayerTriggerService.Get("hp");

hp.Tags = ["hp"];

hp.Enable = true;

hp.OnEnter.Add(function (player, area) {

//

player.contextedProperties.MaxHp.Value = 200;

});



var ban = 

AreaPlayerTriggerService.Get("ban"); 

ban.Tags = ["ban"]; 

ban.Enable = true; 

ban.OnEnter.Add(function (player, area) { 

player.Spawns.Enable = false; 

player.Spawns.Despawn(); 

 

player.Ui.Hint.Value = player + " " + "ТЫ ЗАБАНЕН"; 

});





AreaPlayerTriggerService.Get("online") .Tags = ["online"]; 

AreaPlayerTriggerService.Get("online")  .Enable = true; 

AreaPlayerTriggerService.Get("online") .OnEnter.Add(function(player ){ 

 player.Ui.Hint.Value = Players.Count; 

});



var Buy = AreaPlayerTriggerService.Get("Buy");  

Buy.Tags = ["Buy"];  

Buy.Enable = true;  

Buy.OnEnter.Add(function(player){ 

if(player.Properties.Get("Scores").Value >= 90000){

player.Ui.Hint.Value = "куплено главное оружие";

player.Properties.Get("Scores").Value -= 90000;

player.inventory.Main.Value = true;

}else{

player.Ui.Hint.Value = "90.000 монет = главное оружие";

}

});



var Buy1 = AreaPlayerTriggerService.Get("Buy1");  

Buy1.Tags = ["Buy1"];  

Buy1.Enable = true;  

Buy1.OnEnter.Add(function(player){ 

if(player.Properties.Get("Scores").Value >= 30000){

player.Ui.Hint.Value = "куплено запасное оружие";

player.Properties.Get("Scores").Value -= 30000;

player.inventory.Main.Value = true;

}else{

player.Ui.Hint.Value = "30.000 монет = запасное оружие";

}

});



var lol = 

AreaPlayerTriggerService.Get("lol"); 

lol.Tags = ["lol"]; 

lol.Enable = true; 

lol.OnEnter.Add(function (player, area) {

Game.RestartGame();

});



var f = 

AreaPlayerTriggerService.Get("f"); 

f.Tags = ["f"]; 

f.Enable = true; 

f.OnEnter.Add(function (player, area) {

//

player.contextedProperties. inventoryType.Value = 1;

});



var skin1 = AreaPlayerTriggerService.Get("skin1");

skin1.Tags = ["skin1"];

skin1.Enable = true;

skin1.OnEnter.Add(function (player, area) {

if(player.Properties.Get("Scores").Value >= 6000){

player.Ui.Hint.Value = "куплен скин зомби";

player.Properties.Get("Scores").Value -= 6000;

//

player.contextedProperties.SkinType.Value = 1;

}else{

player.Ui.Hint.Value = "чтобы купить скин зомби надо - 6000 коинов";

}

});



//пв

var door = AreaPlayerTriggerService.Get("door"); 

door.Tags = ["door"]; 

door.Enable = true; 

door.OnEnter.Add(function(player) {}); 

//пв 

var Open = AreaPlayerTriggerService.Get("Open"); 

Open.Tags = ["Open"]; 

Open.Enable = true; 

Open.OnEnter.Add(function(player) { 

  if (player.Properties.Get("door").Value >= 1){ 

  var area = AreaService.GetByTag("door")[0]; 

  var iter = area.Ranges.GetEnumerator(); 

  iter.MoveNext(); 

  MapEditor.SetBlock(iter.Current,0); 

  player.Properties.Get("door").Value -= 75; 

  player.Ui.Hint.Value = "ты закрыл дверь"; 

  }else{ 

  var area = AreaService.GetByTag("door")[0]; 

  var iter = area.Ranges.GetEnumerator(); 

  iter.MoveNext(); 

  MapEditor.SetBlock(iter.Current,68); 

  player.Properties.Get("door").Value += 75; 

  player.Ui.Hint.Value = "ты открыл дверь"; 

  } 

});



var b = 

AreaPlayerTriggerService.Get("b"); 

b.Tags = ["b"]; 

b.Enable = true; 

b.OnEnter.Add(function (player, area) {

player.Damage.DamageIn.Value = false;



player.Ui.Hint.Value = "ты получил бессмертие";

});



var adm = AreaPlayerTriggerService.Get("adm")

adm.Tags = ["adm"];  

adm.Enable = true;  

adm.OnEnter.Add(function(player) {  

if(player.Team !== Teams.Get("Red")){

Teams.Get("Red").Add(player);

player.Ui.Hint.Value = "ты топ";

}else{

Teams.Get("Green").Add(player);

}

});



var admi = AreaPlayerTriggerService.Get("admi")

admi.Tags = ["admi"];  

admi.Enable = true;  

admi.OnEnter.Add(function(player) {  

if(player.Team !== Teams.Get("Red")){

Teams.Get("Red").Add(player);

player.Ui.Hint.Value = "ты топ";

}else{

Teams.Get("Green").Add(player);

}

});



var admiz = AreaPlayerTriggerService.Get("admiz")

admiz.Tags = ["admiz"];  

admiz.Enable = true;  

admiz.OnEnter.Add(function(player) {  

if(player.Team !== Teams.Get("Red")){

Teams.Get("Red").Add(player);

player.Ui.Hint.Value = "ты топ";

}else{

Teams.Get("Green").Add(player);

}

});





var g = AreaPlayerTriggerService.Get("g"); 

g.Tags = ["g"]; 

g.Enable = true; 

g.OnEnter.Add(function(player,area) { 

  var pos = area.Ranges.GetAveragePosition();

  var id = MapEditor.GetBlockId(pos.x,pos.y,pos.z);

  player.Ui.Hint.Value = "Id:" + id;

});







// ������������ ���������

var inventory = Inventory.GetContext();

inventory.Main.Value = false;

inventory.Secondary.Value = false;

inventory.Melee.Value = false;

inventory.Explosive.Value = false;

inventory.Build.Value = false;

inventory.BuildInfinity.Value = false;



Players.Get("A3D71149B6BFB9F9").inventory.Main.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.MainInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Secondary.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.SecondaryInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Melee.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Explosive.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.ExplosiveInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.Build.Value = true;

Players.Get("A3D71149B6BFB9F9").inventory.BuildInfinity.Value = true;

Players.Get("A3D71149B6BFB9F9").Build.BlocksSet.Value = BuildBlocksSet.AllClear;





// ������ ���������

Ui.GetContext().Hint.Value = "♨<color=lime>режим топ</a>♨";









// ��������� ��� ������ �����

Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;



// ������������ �����



	greenTeam.Spawns.RespawnTime.Value = 0;

redTeam.Spawns.RespawnTime.Value = 0;

blueTeam.Spawns.RespawnTime.Value = 0;
