<template>
	<div class="body">
    <button @click="sendPage">Qdfd</button>
		<div v-if="adduser" class="addUserBox">
      <button class="creatUser">Creat</button>
      <ul>
        <li v-for="(button, index) in buttons" :key="index">
          <button>{{ button.activity }}</button>
        </li>
      </ul>
    </div>
		<button @click="addUserButton" class="userAdd">Add user</button>
	  <div v-if="activeBox" class="task-main">
		 <img @click="closeTaskBox" class="img-close" src="https://static.thenounproject.com/png/53235-200.png" alt="">
		 <h1>{{ tasks[activeTask].problem }}</h1>
		 <h1>{{ checkUserAnswer }}</h1>
		 <button @click="checkEachTask(index)">Check</button>
	  </div>
	  <div class="main-code">
		 <div class="colors-buttons">
			<button class="codeButton">Code</button>
			<div class="colors">
			  <ul>
				 <li v-for="(color, index) in colors" :key="index">
					<button @click="selectTab(index)" :style="{ backgroundColor: color }"></button>
					<p>{{ activities[index] }}</p>
				 </li>
			  </ul>
			</div>
		 </div>
		 <div class="colors-code">
			<h1>{{ buttons[activeTabs].name }}</h1>
			<ul>
			  <li v-for="(activity, index) in buttons[activeTabs].activity" :key="index">
				 <button
					:draggable="true"
					@dragstart="draggedActivity = activity"
				 >{{ activity }}</button>
			  </li>
			</ul>
		 </div>
		 <div class="write-code" @dragover.prevent @drop="addActivity">
			<div class="start-all">
			  <button @click="startAnimation">Start</button>
			</div>
			<ul>
			  <li v-for="(activity, index) in selectedActivities" :key="index">
				 <button class="activityButton">{{ activity }}</button>
				 <button @click="deleteBox(index)" class="delete">x</button>
			  </li>
			</ul>
		 </div>
		 <div class="list-tasks">
			<h1>Tasks</h1>
			<div>
			  <ul>
				 <li v-for="(task, index) in tasks" :key="task.id">
					<button @click="selectTask(index)">{{ task.id }}</button>
				 </li>
			  </ul>
			</div>
		 </div>
	  </div>
	  <h1>{{ score }}/5</h1>
	  <div class="main-container">
		 <div class="box" :style="boxStyle">
			<img width="120px" :src="imgStyle.src" alt="">
			<p>{{ soundUser }}</p>
		 </div>
		 <div v-if="userslist" class="box" :style="boxStyle">
			<img width="120px" :src="imgStyle.src" alt="">
			<p>{{ soundUser }}</p>
		 </div>
	  </div>
	</div>
 </template>

 <script setup>
 import { ref } from 'vue';
import { useRouter } from 'vue-router';

 const router = useRouter()

 // Цвета и активности
 const colors = ['red', 'green', 'blue', 'yellow', 'purple', '#0a9396', '#461220'];
 const activities = ['Motion', 'Looks', 'Sound', 'Events', 'Control', 'SizeBo', 'Animals'];
 const score = ref(0)
 const sendPage = () => {
  router.push('/ah')
 }

 // Кнопки с разными активностями
 const buttons = ref([
	{ name: "Motion", activity: ["Go Up", "Go Down", "Go Left", "Go Right"] },
	{ name: "Looks", activity: ["Baby", "Ahaha", "Crying", "Smiling"] },
	{ name: "Sound", activity: ["Hihihi", "Ahahaah", "AufAuf", "MiayMiay"] },
	{ name: "Events", activity: ["Jump", "Lie", "RunRight", "Sit Down", "RunLeft"] },
	{ name: "Control", activity: ["Go Up", "Go Down", "Go Left", "Go Right"] },
   { name: "SizeBo", activity: ["Box", "Circle", "ThreeAngle", "FiveAngle"] },
   { name: 'Animals', activity: ["Cat", "Dog", "Sheep", "Dragon", "Vedma"]}
 ]);

 const tasks = ref([
	{
	  id: 1,
	  problem: "The box should answer me Hihihi"
	},
	{
	  id: 2,
	  problem: "Move the box to right 20px to down 20px"
	},
	{
	  id: 3,
	  problem: "1.Should say MiayMiay 2.Down 20px 3.Top 20px 3.Left 20px"
	},
	{
	  id: 4,
	  problem: "1.Should say AufAuf 2.Top 20px 3.Left 40px 4.Up 80px 5.Right 40px 5.Down 60px"
	},
	{
	  id: 5,
	  problem: "Should change the location for RIGHT:20px, TOP:50px, LEFT:20px, UP:80px"
	}
 ]);

 const activeTask = ref(0);
 const activeTabs = ref(0);
 const selectedActivities = ref([]);
 const soundUser = ref('Hi, User');
 const activeBox = ref(false);

 // Стиль для блока
 const boxStyle = ref({
	transform: 'translate(0px, 0px)',
	transition: 'transform 0.5s ease',
  height: '',
  width: '',
  borderRadius: ''
 });

 const imgStyle = ref({
	src: 'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-happy-little-son-baby-png-image_10148748.png'
 });

 // Текущая перетаскиваемая активность
 let draggedActivity = null;

 // Функция для смены активной вкладки
 const selectTab = (index) => {
	activeTabs.value = index;
 };

 // Функция для добавления активности после дропа
 const addActivity = () => {
	if (draggedActivity) {
	  selectedActivities.value.push(draggedActivity);
	  draggedActivity = null;
	}
 };

 const closeTaskBox = () => {
	activeBox.value = false
	checkUserAnswer.value = ''
 }

 // Функция для начала анимации
 const startAnimation = () => {
  let x = 0;
  let y = 0;
  let h = boxStyle.value.height;
  let w = boxStyle.value.width;
  let b = boxStyle.value.borderRadius;
  let s = imgStyle.value.src;

  const handleActivity = (activity, index) => {
    setTimeout(() => {
      switch (activity) {
		  case 'Cat':
			s = "https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-front-view-cat-on-white-background-png-image_9158426.png";
			break;
			case 'Dog':
			s = "https://png.pngtree.com/png-clipart/20230514/original/pngtree-smile-dog-on-white-background-png-image_9160783.png";
			break;
			case 'Sheep':
			s = "https://png.pngtree.com/png-clipart/20230528/ourmid/pngtree-big-sheep-isolated-on-transparent-background-png-image_7110060.png";
			break;
			case "Dragon" :
			s = "https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-king-coerulean-red-dragon-decal-sticker-vector-png-image_6897699.png";
			break;
			case "Vedma":
			s = "https://papus666.narod.ru/clipart/v/volsh/volsh029.png";
			break;
        case 'Go Up':
          y -= 20;
          break;
        case 'Go Down':
          y += 20;
          break;
        case 'Go Left':
          x -= 20;
          break;
        case 'Go Right':
          x += 20;
          break;
        case 'Jump':
          y -= 20;
          setTimeout(() => { y += 60; }, 100);
          break;
        case 'Lie':
          h = '20px';
          break;
        case 'RunRight':
          x += 150;
          break;
        case 'RunLeft':
          x -= 150;
          break;
        case 'Circle':
          w = '60px';
          h = '60px';
          b = '500px';
          break;
        case 'ThreeAngle':
          w = '0';
          h = '0';
          boxStyle.value = {
            transform: `translate(${x}px, ${y}px)`,
            transition: 'transform 0.5s ease',
            borderLeft: '25px solid transparent',
            borderRight: '25px solid transparent',
            borderBottom: '50px solid red'
          };
          return;
			 case 'Box':
				w = '60px',
				h = '60px'
				b = '0'
			break;
			case 'FiveAngle':
				boxStyle.value = {
					transform: `translate(${x}px, ${y}px)`,
					transition: 'transform 0.5s ease',
					width: '100px',
					height: '100px',
					backgroundColor: 'red',
					clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
  };
  return;
        default:
          break;
      }
      boxStyle.value = {
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 0.5s ease',
        height: h,
        width: w,
        borderRadius: b
      };
		imgStyle.value = {
			src: s
		}
    }, index * 500); // Delay each step by 500ms
  };

  selectedActivities.value.forEach((activity, index) => {
    handleActivity(activity, index);
    if (['Hihihi', 'Ahahaah', 'AufAuf', 'MiayMiay'].includes(activity)) {
      playSound(activity, index);
    }
  });
};


	const playSound = (sound, index) => {
	  setTimeout(() => {
		 switch (sound) {
			case 'Hihihi':
			  soundUser.value = "Hihihi";
			  break;
			case 'Ahahaah':
			  soundUser.value = "Ahahaah";
			  break;
			case 'AufAuf':
			  soundUser.value = "AufAuf";
			  break;
			case 'MiayMiay':
			  soundUser.value = "MiayMiay";
			  break;
			default:
			  soundUser.value = '';
			  break;
		 }
	  }, index * 500); // Задержка для синхронизации со временем анимации
	};

	selectedActivities.value.forEach((activity, index) => {
	  animate(activity, index);
	  if (['Hihihi', 'Ahahaah', 'AufAuf', 'MiayMiay'].includes(activity)) {
		 playSound(activity, index);
	  }
	});

 // Функция для выбора задачи и отображения бокса
 const selectTask = (index) => {
	activeTask.value = index;
	activeBox.value = true;
 };

 const checkUserAnswer = ref("")
 const numberEachTask = ref(0)

 const checkEachTask = (index) => {
  const task = tasks.value[activeTask.value];

  if (task.id === 1 && soundUser.value === "Hihihi") {
    checkUserAnswer.value = "You did it correct";
    numberEachTask.value = index;
	 score.value++
  } else if (task.id === 2) {
    const transform = boxStyle.value.transform;
    const expectedTransform = 'translate(20px, 20px)';

    if (transform === expectedTransform) {
      checkUserAnswer.value = "You did it correct";
      numberEachTask.value = index;
		score.value++
    } else {
      alert('Incorrect movement');
    }
  } else if (task.id === 3) {
    const transform = boxStyle.value.transform;
    const expectedTransform = 'translate(-20px, 0px)'; // Ensure this matches the intended position

    if (soundUser.value === "MiayMiay" && transform === expectedTransform) {
      checkUserAnswer.value = "You did it correct";
      numberEachTask.value = index;
		score.value++
    } else {
      alert('Incorrect');
    }
  }else if (task.id == 4) {
    const transform = boxStyle.value.transform;
    const expectedTransform = 'translate(0px, -40px)';

    if(soundUser.value === "AufAuf" && transform == expectedTransform) {
      checkUserAnswer.value = "You did it correct";
      numberEachTask.value = index
      score.value++
    }else {
      alert('Try again chert')
    }
  } else {
    alert('Incorrect');
  }
};

const deleteBox = (index) => {
	selectedActivities.value.splice(index, 1)
}



const adduser = ref(false)
const userslist = ref(false)

const addUserButton = () => {
	adduser.value = !adduser.value
  userslist.value = true
}

 </script>

 <style scoped>
 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
 }

 .codeButton {
	background-color: white;
	color: #6247aa;
	border: 1px solid grey;
	padding: 15px 25px;
	border-radius: 15px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	cursor: pointer;
 }

 .main-code {
	background-color: white;
	width: 700px;
	border-radius: 15px;
	height: 98vh;
	display: flex;
	border: 1px solid #6247aa;
 }

 .colors {
	display: flex;
	flex-direction: column;
	width: 83px;
 }

 .colors button {
	background-color: white;
	border-radius: 50%;
	margin: 10px 25px;
	height: 30px;
	width: 30px;
	padding: 0;
 }

 .colors p {
	margin: 0px 17px;
	font-family: sans-serif;
	font-weight: bold;
	color: black;
	font-size: 15px;
 }

 .colors-code {
	background-color: #6247aa;
	width: 400px;
	height: 98vh;
	display: flex;
	align-items: center;
	flex-direction: column;
 }

 .colors-code li {
	list-style: none;
 }

 .colors-code h1 {
	text-align: center;
	color: white;
	font-family: sans-serif;
	padding: 20px 0px;
 }

 .colors-code button {
	width: 130px;
	font-size: 15px;
	padding: 10px;
	border-radius: 8px;
	border: none;
	color: white;
	background-color: #5f27cd;
	margin: 20px 0px;
 }

 .write-code {
	background-color: cadetblue;
	width: 500px;
	height: 98vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 0px;
 }

 .write-code ul {
	list-style: none;
	font-family: sans-serif;
	font-size: 18px;
	color: white;
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
 }

 .write-code li {
	margin: 5px 0;
	width: 100%;
	display: flex;
	justify-content: center;
 }

 .main-code .activityButton {
	width: 130px;
	font-size: 15px;
	padding: 10px;
	border-radius: 8px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: none;
	color: white;
	background-color: #5f27cd;
 }

 .box {
	position: relative;
 }

 .main-container {
	display: flex;
	align-items: center;
	margin: 0 auto;
 }

 .body {
	display: flex;
 }

 .box p {
	position: absolute;
	font-size: 20px;
	top: -20px;
	left: 30px;
	background-color: cornflowerblue;
	padding: 5px 9px;
	color: white;
  width: 90px;
 }

 .list-tasks {
	background-color: darkorange;
	width: 300px;
	height: 98vh;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
 }

 .list-tasks li {
	list-style: none;
 }

 .list-tasks button {
	margin: 10px 0px;
 }

 .list-tasks h1 {
	margin: 32px 0px;
	color: white;
	background-color: #5f27cd;
	border-radius: 12px;
	padding: 7px 23px;
	font-size: 20px;
	font-family: sans-serif;
	font-weight: lighter;
 }

 .task-main {
	z-index: 999;
	top: 80px;
	left: 160px;
	position: absolute;
	background-color: deeppink;
	width: 80%;
	height: 80vh;
 }

 .task-main h1 {
	color: white;
	padding: 15px;
 }

 .img-close {
	width: 30px;
	position: absolute;
	right: 0;
 }

 .task-main button {
	background-color: lightskyblue;
	padding: 10px 30px;
	border: none;
	color: white;
	font-size: 20px;
	position: absolute;
	bottom: 5px;
	right: 5px;
	border-radius: 10px;
 }

 .start-all button {
	width: 130px;
	font-size: 15px;
	padding: 10px;
	border-radius: 8px;
	border: none;
	color: white;
	background-color: #5f27cd;
 }
 .delete {
	font-size: 15px;
	padding: 10px 15px;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	border: none;
	color: white;
	background-color: red;
	font-size: 20px;
 }
 .list-tasks button {
	background-color: white;
	color: #6247aa;
	border: 1px solid grey;
	padding: 15px 25px;
	border-radius: 15px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	cursor: pointer;
 }
 .userAdd {
	position: absolute;
	bottom: 30px;
	right: 30px;
	background-color: #47126b;
	border: none;
	color: white;
	padding: 15px 30px;
	border-radius: 20px;
	font-size: 15px;
 }
 .addUserBox {
	position: absolute;
	z-index: 10000;
	margin: 50px 190px;
	background-color: #ffd449;
	width: 80%;
	height: 80vh;
 }
 .creatUser {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #083d77;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 15px;
 }
 </style>
