import React from 'react';

class Notes extends React.Component {
  render () {
    return (
      <div>
        <h3>PLC 1 Course</h3>
        <h4>Section 2</h4>
          <h5><mark>Video6:RSLogix 500 Environment</mark></h5>
            <p>
            1)Menu Bar-Go online, download/upload programs, coms, Verify Project<br />
            2)Project navigation Pane- File Structure<br />
            3)Code Pane- where your program lives<br />
            4)Instructions pane- where you get the drop in tools for program<br />
            5)Search Bar- to find tags in program<br />
            </p>
          <h5>***Video7:Basic Functionality:</h5>
            <p>
            1)Under Program files we see the ladders.  Ladder 2 is the first
            ladder and it can't be erased<br />
            2)Ladder rungs start at 0 and go to end.<br />
            3)Jump to subroutine will jump to the different ladders in program
            files.  Once it gets to end, it starts back at rung 0 on Ladder 2<br />
            </p>
        <hr />
        <h4>Section 4:Programming Fundamentals</h4>
          <h5>Video16:Data Management</h5>
          <p>
          Addressing:<br />
          B=Boolean, digital and discreet all mean the same thing. 1 or 0<br />
          N=Integers. No decimals<br />
          F=Floats. Numbers with decimals<br />
          I=Input
          Addressing structure:<br />
          [TYPE][FILE (if applicable)]:[ROW or WORD or SLOT][/ or .][BIT or WORD or CHANNEL]<br />
          </p>
          <h5>***17:Breakdown of addressing</h5>
          <p>
          In other words, if the adress has a letter and a number at the
          beginning, it is the type of file and which of those types of files
          it is. For example, In B3:12/15, it is file 3 of the bit tables.
          </p>
          <ul>
            <li>I= Input</li>
            <li>O= Output</li>
            <li>T= Timer</li>
            <li>B= Boolean</li>
          </ul>
          <p></p>
          <h5>***18:Rungs and Branches</h5>
          <p>Rungs have numbers, branches come off of rungs.  Program works from
          top to bottom. You can have more than one condition on a rung but no
          more than 1 output per branch. Conditions on the left, actions on the
          right.  All conditions must be true for the action to be taken.  Maybe
          rungs act like ands on the same branch for conditions and acts like
          ors when there are branches for conditions.</p>
          <h4>Section 5:Programming Setup</h4>
          <h5>33:</h5>
          <h5>34:</h5>
          <h5>35:</h5>
          <h5>36:</h5>
          <h5>37:</h5>
          <h5>38:</h5>
          <h5>39:</h5>
          <h4>Section 6:IO Programming</h4>
          <h5>40:</h5>
          <h5>41:</h5>
          <h5>42:</h5>
          <h5>43:</h5>
          <h5>44:</h5>
          <h5>45:</h5>
          <p></p>
          <h4>Section 7:Process Logic</h4>
          <h5>46:</h5>
          <h5>47:</h5>
          <h5>48:</h5>
          <h5>49:</h5>
          <h5>50:</h5>
          <h5>51:</h5>
          <h5>52:</h5>
          <h5>53:</h5>
          <p></p>
          <h4>Section 8:Alarms and Notifications</h4>
          <h5>54:</h5>
          <h5>55:</h5>
          <h5>56:</h5>
          <h5>57:</h5>
          <h5>58:</h5>
          <h5>59:</h5>
          <p></p>
          <h4>Section 9:HMI</h4>
          <h5>60:</h5>
          <h5>61:</h5>
          <h5>62:</h5>
          <h5>63:</h5>
          <h5>64:</h5>
          <h5>65:</h5>
          <h5>66:</h5>
          <h5>67:</h5>
          <p></p>
          <h4>Section 10:Communications</h4>
          <h5>68:</h5>
          <h5>69:</h5>
          <h5>70:</h5>
          <p></p>
          <h4>Section 11:Program Walkthrough</h4>
          <h5>71:</h5>
          <h5>72:</h5>
          <h5>73:</h5>
          <h5>74:</h5>
          <h5>75:</h5>
          <h5>76:</h5>
          <h5>77:</h5>
          <h5>78:</h5>
          <h5>79:</h5>
          <h5>80:</h5>
          <h5>81:</h5>
          <h5>82:</h5>
          <p></p>
          <h4>Section 12:Shakedown/Debugging</h4>
          <h5>83:</h5>
          <h5>84:</h5>
          <h5>85:</h5>
          <h5>86:</h5>
          <h5>87:</h5>
          <h5>88:</h5>
          <h5>89:</h5>
          <h5>90:</h5>
          <h5>91:</h5>
          <p></p>
          <h4>Section 13:Conclusion</h4>
          <h5>92:</h5>
          <p></p>
          <h4>Section 14:Supplemental Material</h4>
          <h5>93:</h5>
          <h5>94:</h5>
          <h5>95:</h5>
          <h5>96:</h5>
          <h5>97:</h5>
          <p></p>
          <h4>Section 15:Bonus Content</h4>
          <h5>98:</h5>
          <p></p>
          <li></li>
        <hr />
      </div>
    );
  }
}

export default Notes;
