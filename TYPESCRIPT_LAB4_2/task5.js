"use strict";
// Узел дерева
class TreeNode {
    value;
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
// Бинарное дерево поиска 
class BinaryTree {
    root = null;
    // Вставка элемента
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
        // при равенстве ничего не происходит
    }
    // Поиск элемента
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node === null)
            return false;
        if (value === node.value)
            return true;
        if (value < node.value)
            return this.searchNode(node.left, value);
        else
            return this.searchNode(node.right, value);
    }
    // Удаление элемента
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (node === null)
            return null;
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            // минимальный ищется в правом поддереве
            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;
            node.right = this.deleteNode(node.right, minNode.value);
            return node;
        }
    }
    findMinNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
    // Изменение элемента 
    update(oldValue, newValue) {
        if (!this.search(oldValue))
            return false;
        this.delete(oldValue);
        this.insert(newValue);
        return true;
    }
    // Высота дерева
    getHeight() {
        return this.heightNode(this.root);
    }
    heightNode(node) {
        if (node === null)
            return 0;
        const leftHeight = this.heightNode(node.left);
        const rightHeight = this.heightNode(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    // Вывод дерева
    inorder() {
        const result = [];
        this.inorderTraversal(this.root, result);
        return result;
    }
    // обход дерева, прямой обход (левый -> сам узел -> правый)
    inorderTraversal(node, result) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
    }
}
const bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.inorder()); // [3,5,7,10,15]
console.log(bst.search(7)); // true
console.log(bst.getHeight()); // 3
bst.update(7, 8);
console.log(bst.inorder()); // [3,5,8,10,15]
bst.delete(5);
console.log(bst.inorder()); // [3,8,10,15]
