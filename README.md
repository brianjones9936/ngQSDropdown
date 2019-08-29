# QSDropdown
•	An Angular Library that provides a simple drop down list using virtualization and a scroll to entry as you type.
•	This component provides easy search and selection on large data lists.
•	It was developed using Angular > = 8.2.3

# Installation
•	npm i ng-qsdropdown

# API
•	import { NgQSDropdownModule } from 'ng-qsdropdown/ng-qsdropdown';
•	selector:  lib-ngQSDropdown

# @Inputs()
<table style="width:100%">
  <tr>
    <th>Input</th>
    <th>Type</th> 
    <th>Required</th>
    <th>Descriptions</th>
  </tr>
  <tr>
    <td>items</td>
    <td>object[]</td> 
    <td>YES</td>
    <td>Object array and you must specify the property to be used for ID and Display in the list (identified below)</td>
  </tr>
    <tr>
    <td>showDropDown</td>
    <td>boolean</td> 
    <td>Optional, default: false</td>
    <td>When input field has focus this is set to TRUE. Upon selections of an item in the field this is set to false.  Use this to force the visibility of the drop down list.</td>
  </tr>
    <tr>
    <td>itemDisplayPropertyName</td>
    <td>string</td> 
    <td>YES</td>
    <td>Property to use for display in the item list drop down.</td>
  </tr>
    <tr>
    <td>itemIdPropertyName</td>
    <td>string</td> 
    <td>YES</td>
    <td>Unique identifier for the object like an Id within the array of objects.</td>
  </tr>
</table>

# @Outputs()
<table style="width:100%">
  <tr>
    <th>Input</th>
    <th>Type</th> 
    <th>Required</th>
    <th>Descriptions</th>
  </tr>
  <tr>
    <td>itemSelect</td>
    <td>object</td> 
    <td>YES</td>
    <td>Emits selected item.</td>
  </tr>
</table>

