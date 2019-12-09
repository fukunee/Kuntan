# Kuntan
Kun's **Catan** Island Game. Play with your friends! **Let‘s ROLL!**



### Tech Design

B/S Architecture adopted: 

- Front End: Legacy Framework、Webpack、Websocket-Client
- Server End: Express.js、Websocket-Client



### Front-End Sketch

Display the game board by rendering A Simple String.

					 /█￣￣￣█\
				        /            \
				       /              \
				??3:1 /                \   ??2:1
			    /█￣￣￣█       ??       █￣￣￣█\
		           /           \      ??      /           \
		       	  /             \            /             \
		         /               \          /               \
	       /█￣￣￣█      ??        █＿＿＿█       ??       █￣￣￣█\
	 ??3:1/          \      ??       /          \      ??       /          \??2:1
	     /            \             /            \             /            \
	    /	           \           /              \           /              \
	   █ 	   ??       \█＿＿＿█       ??       █＿＿＿█/      ??       █
	    \      ??       /          \      ??      /          \      ??       /
	     \             /            \            /            \             /
	      \           /              \          /              \           /
	       \█＿＿＿█       ??       █＿＿＿█       ??       █＿＿＿█/
	      /          \       ??      /          \      ??       /          \
	     /            \             /            \             /            \
	    /	           \           /              \           /              \
	   █ 	   ??       \█＿＿＿█       ??       █＿＿＿█/      ??       █
	    \      ??       /          \       ??     /          \      ??       /
	??2:1\             /            \            /            \             /??3:1
	      \           /              \          /              \           /
	       \█＿＿＿█      ??        █＿＿＿█       ??       █＿＿＿█/
	      /          \      ??       /          \      ??       /          \
	     /            \             /            \             /            \
	    /	           \           /              \           /              \
	   █ 	  ??        \█＿＿＿█       ??       █＿＿＿█/      ??       █
	    \     ??         /         \      ??      /          \      ??       /
	     \             /            \            /            \             /
	      \           /              \          /              \           /
	       \█＿＿＿█       ??       █＿＿＿█       ??       █＿＿＿█/
	                 \       ??      /          \      ??       /
	                  \             /            \             /
	              ??3:1\           /              \           /??2:1
	                    \█＿＿＿█       ??       █＿＿＿█/
	                              \       ??       /
	                               \              /
	                                \            /
	                                 \█＿＿＿█/
	                                    ??2:1
	                                  
	
	
	
	


### Server API

Room API

- R1: Create a Table

- R2: Get Tables' state
- R3: Get a specific Table's state
- R3: Sit at a specific Table
- R4: Leave this Table
- R5: Start Game
- R6: Pause
- R7: Leave Game (When a player leave the game, the Only change is that CPU would roll dices for him)

Game API

- G1: Get the gameboard's state

- G2: Get the players' state

- G3: Get my Cards' state

- G4: Get my pieces' state

- G5: Get Game process's state

  ...